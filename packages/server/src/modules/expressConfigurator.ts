import express from "express";
const app = express();
const { uuid } = require("uuidv4");
const routes = require("../routes/routes");

const generateUUID = (req: any, res: any, next: any) => {
  req.uuid = uuid();
  res.uuid = req.uuid;
  next();
};

module.exports.configure = (config: any) => {
  app.use(generateUUID);
  routes.configure(app, config);
  return app;
};
