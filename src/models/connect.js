import { Sequelize } from "sequelize";

const sequelize = new Sequelize("node39_app_food", "root", "1234", {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
});

export default sequelize;
