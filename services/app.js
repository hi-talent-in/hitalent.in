import "dotenv/config.js";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import fs from "fs";

import homeRoute from "./routes/home.js";
import contactRoute from "./routes/contact.js";
import feedbackRoute from "./routes/feedback.js";
import talent from "./routes/talent.js";
import staff from "./routes/staff.js";
import { updateProfile, getProfile } from "./views/profile.js";
import { tokenMiddleware } from "./core/middleware.js";
// import { chatBot } from "./core/chatgptHandler.js";
import { dbConnect, sqConnect } from "./core/dbconnector.js";
import { Path, KeyValuePairs } from "./models/learningPath.js";
import { getJobs } from "./views/fetchJobs.js";
import { findJobs } from "./views/cronFetchJobs.js";

const app = express();
const nodePort = process.env.NODE_PORT;
const corsOrigin = process.env.FRONTEND_URL;

const appUsage = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: [corsOrigin],
      methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    })
  );
  // app.post("/bot", chatBot);
  app.use("/contact", contactRoute);
  app.use("/feedback", feedbackRoute);
  app.use("/talent", talent);
  app.use("/staff", staff);
  app.post("/profile/", tokenMiddleware, updateProfile);
  app.get("/profile/", tokenMiddleware, getProfile);
  app.get("/jobs", getJobs);
  app.get("/cron/find/jobs", findJobs);
};
appUsage();

app.get("/", (req, res) => {
  res.status(200).json({ message: "API Working.." });
});

const server = async () => {
  await dbConnect()
    .then(async () => {
      console.log("DATABASE CONNECTED");
      await sqConnect()
        .then(async () => {
          app.listen(nodePort, console.log("Visit http://localhost:8000"));
          await Path.findOne({ where: { talentId: 2023 } })
            .then(async (path) => {
              if (path) {
                console.log("!!!! Default Learning Path Exits !!!!");
              } else {
                const treeData = fs.readFileSync(
                  "./defaultData/treeData.json",
                  "utf8"
                );
                const skills = fs.readFileSync(
                  "./defaultData/skill.json",
                  "utf8"
                );
                const skillSet = fs.readFileSync(
                  "./defaultData/skillSet.json",
                  "utf8"
                );
                const keys = fs.readFileSync("./defaultData/keys.json", "utf8");
                const tips = fs.readFileSync("./defaultData/tips.json", "utf8");
                const resources = fs.readFileSync(
                  "./defaultData/resources.json",
                  "utf8"
                );
                await Path.create({
                  talentId: 2023,
                  treeData: treeData,
                  tips: tips,
                  resources: resources,
                  keys: keys,
                  skills: skills,
                })
                  .then(async (path) => {
                    await KeyValuePairs.findOne({
                      where: { key: "skills" },
                    })
                      .then(async (skills) => {
                        if (skills) {
                          await skills
                            .update({
                              value: skillSet,
                            })
                            .then(() => {
                              console.log("**** Default Path Updated ****");
                            })
                            .catch((error) => {
                              console.log(error.message);
                            });
                        } else {
                          await KeyValuePairs.create({
                            key: "skills",
                            value: skillSet,
                          })
                            .then(() => {
                              console.log("**** Default Path Created ****");
                            })
                            .catch((error) => {
                              console.log(error.message);
                            });
                        }
                      })
                      .then(async () => {
                        await KeyValuePairs.findOne({
                          where: { key: "addKeyInc" },
                        }).then(async (key) => {
                          if (key) {
                            await key
                              .update({
                                value: key + 1,
                              })
                              .then(() => {
                                console.log(
                                  "**** Default  Add path Increment Key Updated ****"
                                );
                              })
                              .catch((error) => {
                                console.log(error.message);
                              });
                          } else {
                            await KeyValuePairs.create({
                              key: "addKeyInc",
                              value: JSON.parse(path.keys).length + 1,
                            })
                              .then(() => {
                                console.log(
                                  "**** Default Add path Increment Key created ****"
                                );
                              })
                              .catch((error) => {
                                console.log(error.message);
                              });
                          }
                        });
                      })
                      .catch((error) => {
                        console.log(error.message);
                      });
                  })
                  .catch((error) => {
                    console.log(error.message);
                  });
              }
            })
            .catch((error) => {
              console.log(error.message);
            });
        })
        .catch((error) => {
          console.log(error.message);
          console.log("DB NOT SEQUELIZED");
        });
    })
    .catch((error) => {
      console.log(`server stopped and error=${error}`);
    });
};

server();
