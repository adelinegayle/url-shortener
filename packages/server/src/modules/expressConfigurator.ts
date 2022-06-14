import express from "express";
const app = express();
const routes = require("../routes/routes");

module.exports.configure = (config: any) => {
  routes.configure(app, config);
  return app;
};
