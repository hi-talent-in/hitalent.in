import puppeteer from "puppeteer";
import { KeyValuePairs } from "../models/learningPath.js";

const ARGS = [
  "--disable-gpu",
  "--disable-dev-shm-usage",
  "--disable-setuid-sandbox",
  "--no-first-run",
  "--no-sandbox",
  "--no-zygote",
  "--deterministic-fetch",
  "--disable-features=IsolateOrigins",
  "--disable-site-isolation-trials",
];

export const findJobs = async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      headless: "new",
      ignoreHTTPSErrors: true,
      args: ARGS,
    });
    const page = await browser.newPage();
    let jobs = [];
    let targetCount = 60;
    await page.goto(
      `https://in.linkedin.com/jobs/search?keywords=Developer&f_TPR=r86400&position=1&pageNum=0`,
      { waitUntil: "networkidle0", timeout: 0 }
    );
    await page.waitForSelector("body");
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
    await page.goto(
      `https://www.naukri.com/frontend-development-backend-development-fullstack-developer-jobs-in-india?k=frontend%20development%2C%20backend%20development%2C%20fullstack%20developer&l=india&jobAge=1`,
      { waitUntil: "networkidle0", timeout: 0 }
    );
    await page.waitForSelector("body");
    previousCount = 0;
    let count = 0;
    let x = 100;
    while (count < targetCount) {
      const jobsArray2 = await page.evaluate(() =>
        Array.from(
          document.querySelectorAll(
            `#root > div.search-result-container > div > div > section.listContainer.fleft > div.list > article`
          )
        ).map((item) => {
          let job = {};
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
      for (let index = 0; index < jobsArray2.length; index++) {
        const job = jobsArray2[index];
        job.key = x;
        x += 1;
      }
      jobs = jobs.concat(jobsArray2);
      if (jobsArray2.length < previousCount) {
        break;
      } else {
        count = count + jobsArray2.length;
        try {
          await page.click(
            `#root > div.search-result-container > div > div > section.listContainer.fleft > div.mt-36.mb-54 > div > a.fright.fs14.btn-secondary.br2`
          );
          await page.waitForSelector(
            "#root > div.search-result-container > div > div > section.listContainer.fleft",
            { timeout: 2000 }
          );
        } catch (error) {
          break;
        }
      }
      previousCount = jobsArray2.length;
    }
    previousCount = 0;
    count = 0;
    let y = 200;
    for (let i = 0; i < 60; i += 10) {
      if (i === 0) {
        await page.goto(
          `https://in.indeed.com/jobs?q=Developer&l=India&fromage=1`,
          { waitUntil: "networkidle0", timeout: 0 }
        );
      } else {
        const newUrl =
          `https://in.indeed.com/jobs?q=Developer&l=India&fromage=1` +
          "&start=" +
          i;
        await page.goto(newUrl, { waitUntil: "networkidle0", timeout: 0 });
        await page.waitForSelector(`body`);
      }
      const jobsArray3 = await page.evaluate(() =>
        Array.from(
          document.querySelectorAll(`#mosaic-provider-jobcards > ul > li`)
        ).map((item) => {
          let job = {};
          const jobTitle = item.querySelector(
            "div > div.slider_container.css-77eoo7.eu4oa1w0 > div > div.slider_item.css-kyg8or.eu4oa1w0 > div > table.jobCard_mainContent.big6_visualChanges > tbody > tr > td > div.css-1m4cuuf.e37uo190 > h2 > a > span"
          );
          job.jobTitle = jobTitle ? jobTitle.textContent : "";
          const jobCompanyName = item.querySelector(
            "div > div.slider_container.css-77eoo7.eu4oa1w0 > div > div.slider_item.css-kyg8or.eu4oa1w0 > div > table.jobCard_mainContent.big6_visualChanges > tbody > tr > td > div.heading6.company_location.tapItem-gutter.companyInfo > span"
          );
          job.jobCompany = {
            name: jobCompanyName ? jobCompanyName.textContent : "",
            link: jobCompanyName
              ? `https://in.indeed.com/cmp/${jobCompanyName.textContent}`
              : "",
          };
          const jobApplyLink = item.querySelector(
            "div > div.slider_container.css-77eoo7.eu4oa1w0 > div > div.slider_item.css-kyg8or.eu4oa1w0 > div > table.jobCard_mainContent.big6_visualChanges > tbody > tr > td > div.css-1m4cuuf.e37uo190 > h2 > a"
          );
          job.jobApplyLink = jobApplyLink ? jobApplyLink.href : "";
          const jobLocation = item.querySelector(
            "div > div.slider_container.css-77eoo7.eu4oa1w0 > div > div.slider_item.css-kyg8or.eu4oa1w0 > div > table.jobCard_mainContent.big6_visualChanges > tbody > tr > td > div.heading6.company_location.tapItem-gutter.companyInfo > div"
          );
          job.jobLocation = jobLocation ? jobLocation.textContent : "";
          return job;
        })
      );
      for (let index = 0; index < jobsArray3.length; index++) {
        const job = jobsArray3[index];
        job.key = y;
        y += 1;
      }
      jobs = jobs.concat(jobsArray3);
      if (jobsArray3.length < previousCount) {
        break;
      }
      previousCount = jobsArray3.length;
    }
    await KeyValuePairs.findOne({ where: { key: "jobs" } })
      .then(async (savedJobs) => {
        if (savedJobs) {
          await savedJobs
            .update({
              value: JSON.stringify(
                jobs.filter((o) => Boolean(o.jobApplyLink))
              ),
            })
            .then(() => res.status(200).json("ok"))
            .catch((err) => res.status(400).json({ message: err.message }));
        } else {
          await KeyValuePairs.create({
            key: "jobs",
            value: JSON.stringify(jobs.filter((o) => Boolean(o.jobApplyLink))),
          })
            .then(() => res.status(200).json("ok"))
            .catch((err) => res.status(400).json({ message: err.message }));
        }
      })
      .catch((err) => res.status(400).json({ message: err.message }));
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
