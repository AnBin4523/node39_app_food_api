import express from 'express';
import appFoodRoute from './appFoodRoute.js';

const rootRoute = express.Router();

rootRoute.use("/appFood", appFoodRoute);

export default rootRoute;