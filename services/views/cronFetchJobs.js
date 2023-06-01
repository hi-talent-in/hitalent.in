import puppeteer from "puppeteer";

const infiniteScrollItems = async (url, targetCount, scrap) => {
  const browser = await puppeteer.launch({
    headless: "new",
    ignoreHTTPSErrors: true,
    args: [
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--disable-setuid-sandbox",
      "--no-first-run",
      "--no-sandbox",
      "--no-zygote",
      "--deterministic-fetch",
      "--disable-features=IsolateOrigins",
      "--disable-site-isolation-trials",
      // '--single-process',
    ],
  });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector("body");

  let items = [];
  let previousHeight;
  let previousCount = 0;
  let currentCount = 0;
  while (currentCount < targetCount) {
    previousCount = currentCount;
    // Scroll to the bottom of the page
    previousHeight = await page.evaluate("document.body.scrollHeight");
    await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
    await page.waitForFunction(
      `document.body.scrollHeight > ${previousHeight}`
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
    currentCount = await page.evaluate(() => {
      const liElements = document.querySelectorAll("li");
      return liElements.length;
    });

    if (currentCount === previousCount) {
      // If the count hasn't increased, break the loop
      break;
    }
  }
  let jobs;
  if (scrap === 1) {
    jobs = await page.evaluate(() => {
      const jobsArr = Array.from(document.querySelectorAll("li")).map(
        (item) => {
          let job = {};
          const jobTitle = item.querySelector(".base-search-card__title");
          job.jobTitle = jobTitle ? jobTitle.textContent : "";
          const jobCompanyLogo = item.querySelector(".artdeco-entity-image");
          job.jobCompanyLogo = jobCompanyLogo ? jobCompanyLogo.src : "";
          const jobCompanyName = item.querySelector(".hidden-nested-link");
          job.jobCompanyName = jobCompanyName ? jobCompanyName.textContent : "";
          const jobCompanyLink = item.querySelector(".hidden-nested-link");
          job.jobCompanyLink = jobCompanyLink ? jobCompanyLink.href : "";
          const jobApplyLink = item.querySelector(".base-card__full-link");
          job.jobApplyLink = jobApplyLink ? jobApplyLink.href : "";
          const jobLocation = item.querySelector(".job-search-card__location");
          job.jobLocation = jobLocation ? jobLocation.textContent : "";
          const jobPostedDate = item.querySelector(
            ".job-search-card__listdate--new"
          );
          job.jobPostedDate = jobPostedDate ? jobPostedDate.datetime : "";
          return job;
        }
      );
      return jobsArr;
    });
  }
  await browser.close();
  return jobs;
};

export const getJobs = async (req, res) => {
  const { skill, source } = req.query;
  if (source) {
    if (skill) {
      let url;
      if (source === "linkedin") {
        url = `https://in.linkedin.com/jobs/search?keywords=${skill}&f_TPR=r86400&position=1&pageNum=0`;
        const scrapedData = await infiniteScrollItems(url, 200, 1);
        return res
          .status(200)
          .json(scrapedData.filter((x) => Boolean(x.jobApplyLink)));
      } else if (source === "naukri.com") {
      } else if (source === "indeed.com") {
      }
    } else {
      return res.status(400).json({ message: "Please select skill." });
    }
  } else {
    return res.status(400).json({ message: "Please select source." });
  }
};
