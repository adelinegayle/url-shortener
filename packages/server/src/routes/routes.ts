import express from "express";
const router = express.Router();
const { createTinyUrl } = require("./handlers/shortURLHandler");

module.exports.configure = (app: any, config: any) => {
  const routesPath = config.get("express.routes.path.v1");
  app.use(routesPath, router.post(`/shorten-url/create`, createTinyUrl));
};
