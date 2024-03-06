import express from 'express';
import { likeAppFood } from '../controller/appFoodController.js';

const appFoodRoute = express.Router();

appFoodRoute.post("/like", likeAppFood);


export default appFoodRoute;