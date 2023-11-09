import { Router } from "express";
import { postProcess } from "../views/newJoin.js";
import { tokenMiddleware } from "../core/middleware.js";
import { linkedinLogin } from "../views/linkedin.js";

import {
  addPath,
  getPath,
  editPath,
  getTalents,
  deletePath,
  addTips,
  editTips,
  deleteTips,
  addResources,
  editResources,
  deleteResources,
  addSkills,
  getSkills,
  editTaskName,
  getTips,
  getResources,
  addPoints,
  getPoints,
  addTaskSkill,
  getTaskSkills,
  getCompletedPaths,
  editProgress,
  saveChoices,
  getSteps,
  getProgress,
  getAllTalentsProgress,
} from "../views/dashboard/dashboard.js";

const talentRouter = Router();
talentRouter.route("/select/program/").post(tokenMiddleware, postProcess);
talentRouter.route("/login/").post(linkedinLogin);
talentRouter.route("/add/path/").post(tokenMiddleware, addPath);
talentRouter.route("/add/tips/").post(tokenMiddleware, addTips);
talentRouter.route("/save/choices/").post(tokenMiddleware, saveChoices);
talentRouter.route("/add/points/").post(tokenMiddleware, addPoints);
talentRouter.route("/get/tips/").get(getTips);
talentRouter.route("/get/steps/").get(getSteps);
talentRouter.route("/get/progress/").get(getProgress);
talentRouter.route("/get/all/talents/progress/").get(getAllTalentsProgress);
talentRouter.route("/get/points/").get(getPoints);
talentRouter.route("/get/completedPaths/").get(getCompletedPaths);
talentRouter.route("/add/resources/").post(tokenMiddleware, addResources);
talentRouter.route("/progress/change/").post(tokenMiddleware, editProgress);
talentRouter.route("/get/resources/").get(getResources);
talentRouter.route("/edit/tips/").post(tokenMiddleware, editTips);
talentRouter.route("/edit/resources/").post(tokenMiddleware, editResources);
talentRouter.route("/delete/tips/").get(tokenMiddleware, deleteTips);
talentRouter.route("/add/skills/").post(tokenMiddleware, addSkills);
talentRouter.route("/add/taskSkill/").post(tokenMiddleware, addTaskSkill);
talentRouter.route("/edit/taskName/").post(tokenMiddleware, editTaskName);
talentRouter.route("/get/skills/").get(getSkills);
talentRouter.route("/get/taskSkills/").get(getTaskSkills);
talentRouter.route("/delete/resources/").get(tokenMiddleware, deleteResources);
talentRouter.route("/edit/path/").post(tokenMiddleware, editPath);
talentRouter
  .route("/delete/grand/parent/path/")
  .get(tokenMiddleware, deletePath);

talentRouter.route("/get/learning/path/").get(getPath);
talentRouter.route("/get/talents/").get(getTalents);

export default talentRouter;
