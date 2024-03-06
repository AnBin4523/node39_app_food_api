import mysql from "mysql2";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import { responseApi } from "../config/response.js";

const model = initModels(sequelize);

let getAppFood = async (req, res) => {
    
}

let likeAppFood = async (req, res) => {
  let { userId, appFoodId } = req.body;

  await model.like_res.create({
    appFood_id: appFoodId,
    user_id: userId,
    date_like: new Date(),
  });

  responseApi(res, 200, "", "Success");
};

export { likeAppFood };
