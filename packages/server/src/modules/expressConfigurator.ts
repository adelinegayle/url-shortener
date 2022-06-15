import express from "express";
const app = express();
const routes = require("../routes/routes");
const bodyParser = require("body-parser");

module.exports.configure = (config: any) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  routes.configure(app, config);
  return app;
};
