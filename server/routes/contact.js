// const express from"express");
import { Router } from "express";
import { tokenMiddleware } from "../core/middleware.js";
import {
  contactForm,
  deleteContact,
  getContacts,
} from "../views/staff/contact.js";

const contactRouter = Router();

contactRouter.route("/c").post(tokenMiddleware, contactForm);
contactRouter.route("/d/:contactId").get(tokenMiddleware, deleteContact);
contactRouter.route("/g").get(tokenMiddleware, getContacts);

export default contactRouter;
