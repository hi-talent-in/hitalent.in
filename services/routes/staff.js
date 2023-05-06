import express from "express";
import { googleLogin } from "../views/staff/googleLogin.js";
import {
  getTalents,
  deleteTalent,
  getTalentPerm,
  deletePerm,
  getTalent,
  postTalent,
  getTalentProgress,
} from "../views/staff/talents.js";
import { tokenMiddleware } from "../core/middleware.js";
import { getTalentRole, editTalentRole } from "../views/staff/core.js";

const staffRouter = express.Router();

staffRouter.route("/login/").post(googleLogin);
staffRouter.route("/talents").get(tokenMiddleware, getTalents);
staffRouter.route("/talents/progress").get(tokenMiddleware, getTalentProgress);
staffRouter.route("/talents/perms").get(tokenMiddleware, getTalentPerm);
staffRouter.route("/talent/roles").get(tokenMiddleware, getTalentRole);
staffRouter.route("/talent/roles").post(tokenMiddleware, editTalentRole);

staffRouter
  .route("/delete/talent/perm/:talentPermId")
  .get(tokenMiddleware, deletePerm);
staffRouter
  .route("/delete/talent/:talentId")
  .get(tokenMiddleware, deleteTalent);
staffRouter.route("/get/talent/:talentId").get(tokenMiddleware, getTalent);
staffRouter.route("/post/talent/:talentId").post(tokenMiddleware, postTalent);

export default staffRouter;
