const config = require("config");
const expressConfigurator = require("./src/modules/expressConfigurator");
const httpConfigurator = require("./src/modules/httpConfigurator");
const databaseConfigurator = require("./src/modules/databaseConfigurator");

(async () => {
  await databaseConfigurator.connect();
  const app = expressConfigurator.configure(config);
  await httpConfigurator.configure(app, config);
})();
