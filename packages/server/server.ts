const config = require("config");
const expressConfigurator = require("./src/modules/expressConfigurator");
const httpConfigurator = require("./src/modules/httpConfigurator");

(async () => {
  const app = expressConfigurator.configure(config);
  await httpConfigurator.configure(app, config);
})();
