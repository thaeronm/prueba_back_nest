const sequelize = require("./sequelize.config");
const fs = require("fs");
const path = require("path");

const db = (async () => {
  const dir = path.resolve(process.env.PWD, './src/modules');

  fs.readdirSync(dir).filter((file) => {
    const skip = ["index.js"].includes(file);
    if (!skip) require(`../modules/${file}/model`);
  });

  try {
    (async () => sequelize.authenticate())();
  } catch (error) {
    console.error(error);
  } finally {
    (async () => sequelize.sync({force: true}))();
  }
})();

module.exports = db;


