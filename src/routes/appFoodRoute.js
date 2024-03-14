import express from "express";
import {
  getAppFood,
  getLikeAppFood,
  getRateAppFood,
  getUserRate,
  likeAppFood,
  orderAppFood,
  rateAppFood,
  unlikeAppFood,
} from "../controller/appFoodController.js";

const appFoodRoute = express.Router();

appFoodRoute.get("/get-appfood", getAppFood);
appFoodRoute.post("/like", likeAppFood);
appFoodRoute.get("/get-like", getLikeAppFood);
appFoodRoute.post("/unlike", unlikeAppFood);
appFoodRoute.get("/get-rate", getRateAppFood);
appFoodRoute.get("/get-user-rate", getUserRate);
appFoodRoute.post("/rate", rateAppFood);
appFoodRoute.post("/order", orderAppFood);

export default appFoodRoute;
