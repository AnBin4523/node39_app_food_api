import express from "express";
import cors from "cors";
import mysql from "mysql2";
import rootRoute from "./routes/rootRoute.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(rootRoute);
app.listen(8080);

const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  port: "3306",
  database: "node39_app_food",
});
