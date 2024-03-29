import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _appfood from  "./appfood.js";
import _food from  "./food.js";
import _food_type from  "./food_type.js";
import _like_res from  "./like_res.js";
import _orders from  "./orders.js";
import _rate_res from  "./rate_res.js";
import _sub_food from  "./sub_food.js";
import _user from  "./user.js";

export default function initModels(sequelize) {
  const appfood = _appfood.init(sequelize, DataTypes);
  const food = _food.init(sequelize, DataTypes);
  const food_type = _food_type.init(sequelize, DataTypes);
  const like_res = _like_res.init(sequelize, DataTypes);
  const orders = _orders.init(sequelize, DataTypes);
  const rate_res = _rate_res.init(sequelize, DataTypes);
  const sub_food = _sub_food.init(sequelize, DataTypes);
  const user = _user.init(sequelize, DataTypes);

  like_res.belongsTo(appfood, { as: "appfood", foreignKey: "appfood_id"});
  appfood.hasMany(like_res, { as: "like_res", foreignKey: "appfood_id"});
  rate_res.belongsTo(appfood, { as: "appfood", foreignKey: "appfood_id"});
  appfood.hasMany(rate_res, { as: "rate_res", foreignKey: "appfood_id"});
  orders.belongsTo(food, { as: "food", foreignKey: "food_id"});
  food.hasMany(orders, { as: "orders", foreignKey: "food_id"});
  sub_food.belongsTo(food, { as: "food", foreignKey: "food_id"});
  food.hasMany(sub_food, { as: "sub_foods", foreignKey: "food_id"});
  food.belongsTo(food_type, { as: "type", foreignKey: "type_id"});
  food_type.hasMany(food, { as: "foods", foreignKey: "type_id"});
  like_res.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(like_res, { as: "like_res", foreignKey: "user_id"});
  orders.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(orders, { as: "orders", foreignKey: "user_id"});
  rate_res.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(rate_res, { as: "rate_res", foreignKey: "user_id"});

  return {
    appfood,
    food,
    food_type,
    like_res,
    orders,
    rate_res,
    sub_food,
    user,
  };
}
