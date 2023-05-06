import { Router } from "express";
import {
  deleteFeedback,
  feedbackForm,
  getFeedbacks,
  getFeedbackScreenshot,
} from "../views/staff/feedback.js";
import { tokenMiddleware } from "../core/middleware.js";
import multer from "multer";

const feedbackRouter = Router();
import fs from "fs";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const id = req.user.userId;
    const path = `./files/${id}`;
    fs.mkdirSync(path, { recursive: true });
    cb(null, path);
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, Date.now() + "." + ext);
  },
});

// Initialize multer middleware
const upload = multer({ storage: storage });

feedbackRouter
  .route("/c")
  .post(tokenMiddleware, upload.array("file", 100), feedbackForm);
feedbackRouter.route("/d/:feedbackId").get(tokenMiddleware, deleteFeedback);
feedbackRouter.route("/g").get(tokenMiddleware, getFeedbacks);
feedbackRouter.route("").get(getFeedbackScreenshot);

export default feedbackRouter;
