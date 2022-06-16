import express from "express";
const router = express.Router();
const { createShortUrl, redirectToOriginalURL } = require("./handlers/shortURLHandler");

module.exports.configure = (app: any, config: any) => {
  const routesPath = config.get("express.routes.path.v1");
  app.use(routesPath, router.post(`/shortURL/create`, createShortUrl));
  app.use(router.get(`/shortURL/:shortURL`, redirectToOriginalURL));
};
