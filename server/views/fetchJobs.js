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
    ],
  });
  const page = await browser.newPage();
  await page.goto(url);
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
      let jobNumber = 0;
      const jobsArr = Array.from(document.querySelectorAll("li")).map(
        (item) => {
          let job = {};
          jobNumber += 1;
          job.key = jobNumber;
          const jobTitle = item.querySelector(".base-search-card__title");
          job.jobTitle = jobTitle ? jobTitle.textContent : "";
          const jobCompanyName = item.querySelector(".hidden-nested-link");
          const jobCompanyLink = item.querySelector(".hidden-nested-link");
          job.jobCompany = {
            name: jobCompanyName ? jobCompanyName.textContent : "",
            link: jobCompanyLink ? jobCompanyLink.href : "",
          };
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

const getIndeedJobs = async (url) => {
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
    ],
  });
  const page = await browser.newPage();
  await page.goto(url);
  const data = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(`#mosaic-provider-jobcards > ul > li`)
    ).map((item) => {
      let job = {};
      const jobTitle = item.querySelector(
        "div > div.slider_container > div > div.slider_item  > div > table.jobCard_mainContent.big6_visualChanges > tbody > tr > td > div  > h2 > a > span"
      );
      job.jobTitle = jobTitle ? jobTitle.textContent : "";
      const jobCompanyName = item.querySelector(
        "div > div.slider_container > div > div.slider_item  > div > table.jobCard_mainContent.big6_visualChanges > tbody > tr > td > div.heading6.company_location.tapItem-gutter.companyInfo > span"
      );
      job.jobCompany = {
        name: jobCompanyName ? jobCompanyName.textContent : "",
        link: jobCompanyName
          ? `https://in.indeed.com/cmp/${jobCompanyName.textContent}`
          : "",
      };
      const jobApplyLink = item.querySelector(
        "div > div.slider_container > div > div.slider_item  > div > table.jobCard_mainContent.big6_visualChanges > tbody > tr > td > div  > h2 > a"
      );
      job.jobApplyLink = jobApplyLink ? jobApplyLink.href : "";
      const jobLocation = item.querySelector(
        "div > div.slider_container > div > div.slider_item  > div > table.jobCard_mainContent.big6_visualChanges > tbody > tr > td > div.heading6.company_location.tapItem-gutter.companyInfo > div"
      );
      job.jobLocation = jobLocation ? jobLocation.textContent : "";
      return job;
    })
  );
  return data;
};

const nextButtonsPageScrap = async (url, targetCount, scrap) => {
  let jobs = [];
  let count = 0;
  let previousCount = 0;
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
    ],
  });
  const page = await browser.newPage();
  if (scrap === 2) {
    try {
      await page.goto(url, { waitUntil: "domcontentloaded" });
      while (count < targetCount) {
        await page.waitForSelector(
          "#root > div.search-result-container > div > div > section.listContainer.fleft > div.list > article"
        );
        await new Promise((resolve) => setTimeout(resolve, 500));
        const jobsArr = await page.evaluate(() =>
          Array.from(
            document.querySelectorAll(
              "#root > div.search-result-container > div > div > section.listContainer.fleft > div.list > article"
            )
          ).map((item) => {
            const job = {};
            const jobTitle = item.querySelector("div.jobTupleHeader > div > a");
            job.jobTitle = jobTitle ? jobTitle.textContent : "";
            const jobCompanyName = item.querySelector(
              "div.jobTupleHeader > div > div > a"
            );
            const jobCompanyLink = item.querySelector(
              "div.jobTupleHeader > div > div > a"
            );
            job.jobCompany = {
              name: jobCompanyName ? jobCompanyName.textContent : "",
              link: jobCompanyLink ? jobCompanyLink.href : "",
            };
            const jobApplyLink = item.querySelector(
              "div.jobTupleHeader > div > a"
            );
            job.jobApplyLink = jobApplyLink ? jobApplyLink.href : "";
            const jobLocation = item.querySelector(
              "div.jobTupleHeader > ul > li.fleft.br2.placeHolderLi.location > span"
            );
            job.jobLocation = jobLocation ? jobLocation.textContent : "";
            return job;
          })
        );
        jobs = jobs.concat(jobsArr);
        if (jobsArr.length < previousCount) {
          break;
        } else {
          count = count + jobsArr.length;
          try {
            await page.click(
              "#root > div.search-result-container > div > div > section.listContainer.fleft > div.mt-36.mb-54 > div > a.fright.fs14.btn-secondary.br2"
            );
          } catch (error) {
            console.log("No more pages to load.");
            break;
          }
        }
        previousCount = jobsArr.length;
      }
    } catch (error) {
      console.error("Error while scraping:", error);
    } finally {
      await browser.close();
    }
  } else if (scrap === 3) {
    const urls = [
      url,
      url + "&start=" + 10,
      url + "&start=" + 20,
      url + "&start=" + 30,
      url + "&start=" + 40,
    ];
    const jobsArr = await Promise.all(
      urls.map(async (url) => {
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
          ],
        });
        const page = await browser.newPage();
        await page.goto(url);
        const data = await page.evaluate(() =>
          Array.from(
            document.querySelectorAll(`#mosaic-provider-jobcards > ul > li`)
          ).map((item) => {
            let job = {};
            const jobTitle = item.querySelector(
              "div > div.slider_container > div > div.slider_item  > div > table.jobCard_mainContent.big6_visualChanges > tbody > tr > td > div  > h2 > a > span"
            );
            job.jobTitle = jobTitle ? jobTitle.textContent : "";
            const jobCompanyName = item.querySelector(
              "div > div.slider_container > div > div.slider_item  > div > table.jobCard_mainContent.big6_visualChanges > tbody > tr > td > div.heading6.company_location.tapItem-gutter.companyInfo > span"
            );
            job.jobCompany = {
              name: jobCompanyName ? jobCompanyName.textContent : "",
              link: jobCompanyName
                ? `https://in.indeed.com/cmp/${jobCompanyName.textContent}`
                : "",
            };
            const jobApplyLink = item.querySelector(
              "div > div.slider_container > div > div.slider_item  > div > table.jobCard_mainContent.big6_visualChanges > tbody > tr > td > div  > h2 > a"
            );
            job.jobApplyLink = jobApplyLink ? jobApplyLink.href : "";
            const jobLocation = item.querySelector(
              "div > div.slider_container > div > div.slider_item  > div > table.jobCard_mainContent.big6_visualChanges > tbody > tr > td > div.heading6.company_location.tapItem-gutter.companyInfo > div"
            );
            job.jobLocation = jobLocation ? jobLocation.textContent : "";
            return job;
          })
        );
        return data;
      })
    );
    jobsArr.forEach((arr) => {
      jobs = jobs.concat(arr);
    });
  }
  await browser.close();
  for (let index = 0; index < jobs.length; index++) {
    const job = jobs[index];
    job.key = index + 1;
  }
  return jobs;
};

export const getJobs = async (req, res) => {
  const { skill, source } = req.query;
  if (source) {
    if (skill) {
      let url;
      if (source === "linkedin") {
        url = `https://in.linkedin.com/jobs/search?keywords=${skill}&f_TPR=r86400&position=1&pageNum=0`;
        const scrapedData = await infiniteScrollItems(url, 100, 1);
        return res
          .status(200)
          .json(scrapedData.filter((x) => Boolean(x.jobApplyLink)));
      } else if (source === "naukri.com") {
        url = `https://www.naukri.com/${skill}-jobs-in-india?k=${skill}&l=india&jobAge=1`;
        const scrapedData = await nextButtonsPageScrap(url, 100, 2);
        return res
          .status(200)
          .json(scrapedData.filter((x) => Boolean(x.jobApplyLink)));
      } else if (source === "indeed.com") {
        url = `https://in.indeed.com/jobs?q=${skill}&l=India&fromage=1`;
        const scrapedData = await nextButtonsPageScrap(url, 100, 3);
        return res
          .status(200)
          .json(scrapedData.filter((x) => Boolean(x.jobApplyLink)));
      }
    } else {
      return res.status(400).json({ message: "Please select skill." });
    }
  } else {
    return res.status(400).json({ message: "Please select source." });
  }
};
