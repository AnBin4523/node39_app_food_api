import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import { responseApi } from "../config/response.js";

const model = initModels(sequelize);

let getAppFood = async (req, res) => {
  let data = await model.appfood.findAll();

  responseApi(res, 200, data, "Success");
};

let likeAppFood = async (req, res) => {
  let { user_id, appFoodId } = req.body;

  await model.like_res.create({
    appfood_id: appFoodId,
    user_id: user_id,
    date_like: new Date(),
  });

  responseApi(res, 200, "", "Like Success");
};

let getLikeAppFood = async (req, res) => {
  let { appFoodId } = req.body;
  // console.log(appFoodId);

  let appFood = await model.like_res.findAndCountAll({
    where: {
      appfood_id: appFoodId,
    },
  });

  console.log(appFood.count);

  responseApi(res, 200, `${appFood.count}`, "Success");
};

let unlikeAppFood = async (req, res) => {
  let { userId, appFoodId } = req.body;
  console.log({ userId, appFoodId });

  let checkLike = await model.like_res.findOne({
    where: {
      appfood_id: appFoodId,
      user_id: userId,
    },
  });
  console.log(checkLike);

  if (checkLike) {
    await model.like_res.destroy({
      where: {
        appfood_id: appFoodId,
        user_id: userId,
      },
    });

    responseApi(res, 200, "", "Unlike success");
    return;
  } else {
    responseApi(res, 404, "", "You don't like yet");
  }
};

let getRateAppFood = async (req, res) => {
  let { appFoodId } = req.body;

  let data = await model.rate_res.findAll({
    where: {
      appfood_id: appFoodId,
    },
  });

  responseApi(res, 200, data, "Success");
};

let getUserRate = async (req, res) => {
  let { userId } = req.body;

  let data = await model.rate_res.findAll({
    where: {
      user_id: userId,
    },
  });

  responseApi(res, 200, data, "Success");
};

let rateAppFood = async (req, res) => {
  let { user_id, appfoodId, amount } = req.body;

  await model.rate_res.create({
    appfood_id: appfoodId,
    user_id: user_id,
    date_rate: new Date(),
    amount: amount,
  });

  responseApi(res, 200, "", "Rate success");
};

let orderAppFood = async (req, res) => {
  let { user_id, food_id, amount, order_code, arr_sub_id } = req.body;

  await model.orders.create({
    user_id: user_id,
    food_id: food_id,
    amount: amount,
    order_code: order_code,
    arr_sub_id: arr_sub_id,
  });

  responseApi(res, 200, "", "Order success");
};

export {
  getAppFood,
  likeAppFood,
  getLikeAppFood,
  unlikeAppFood,
  getRateAppFood,
  getUserRate,
  rateAppFood,
  orderAppFood
};
