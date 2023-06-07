import { Feedback } from "../../models/staff.js";
import path from "path";

export const feedbackForm = async (req, res) => {
  const userId = req.user.userId;
  if (userId) {
    let { name, email, message, givenBy } = req.body;
    name = name === "null" ? null : name === "undefined" ? undefined : name;
    email = email === "null" ? null : email === "undefined" ? undefined : email;
    message =
      message === "null" ? null : message === "undefined" ? undefined : message;
    console.log({ name, email, message });
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    } else {
      const filesName = String(req.files.map((file) => file.filename));
      let data = { name, email, message, givenBy };
      if (filesName) {
        data.filesName = filesName;
      }
      await Feedback.create(data)
        .then((feedback) => {
          return res.status(200).json({ message: "Feedback form submitted" });
        })
        .catch((error) => res.status(400).json({ error: error.message }));
    }
  } else {
    return res.status(400).json({ message: "Not valid user" });
  }
};

export const getFeedbacks = async (req, res) => {
  const userId = req.user.userId;
  if (userId) {
    await Feedback.findAll()
      .then((feedbacks) => {
        const feedbackList = feedbacks.map((feedback) => {
          const { id, name, email, message, givenBy, ...rest } = feedback;
          let filesName;
          if (feedback.filesName) {
            filesName = feedback.filesName.split(",");
          }
          return { key:id, name, email, message, filesName, givenBy };
        });
        return res.status(200).json({ feedbacks: feedbackList });
      })
      .catch((error) => res.status(400).json({ error: error.message }));
  } else {
    return res.status(401).json({ message: "Not valid user" });
  }
};

export const deleteFeedback = async (req, res) => {
  const userId = req.user.userId;
  if (userId) {
    const feedbackId = req.params.feedbackId;
    if (feedbackId) {
      await Feedback.destroy({ where: { id: feedbackId } })
        .then(() => res.status(200).json({ message: "Feedback deleted." }))
        .catch((error) => res.status(400).json({ error: error.message }));
    } else {
      return res.status(400).json({ message: "Invalid feedbackId" });
    }
  } else {
    return res.status(401).json({ message: "Invalid user" });
  }
};

export const getFeedbackScreenshot = async (req, res) => {
  const __dirname = path.resolve();
  try {
    var filePath = path.join(
      __dirname,
      `files/${req.query.givenBy}/${req.query.fileName}`
    );
    return res.sendFile(filePath);
  } catch (error) {
    return res.status(200).json({ message: "No screenshot available." });
  }
};
