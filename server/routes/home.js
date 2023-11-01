import { Router } from "express";
import { Home } from "../views/home.js";

const homeRoute = Router();

homeRoute.route("/").get(Home);

export default homeRoute;
