const express = require("express");
const router = express.Router();
// const errorHandler = require("../middlewares/error-handler.middleware");
const fs = require("fs");

const pathRouter = `${__dirname}`;

const removeExtension = (fileName) => {
  return fileName.split(".").shift();
};

fs.readdirSync(pathRouter).filter((file) => {
  const fileWithOutExt = removeExtension(file);
  const skip = ["index"].includes(fileWithOutExt);
  if (!skip) {
    router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}/routes`));
    console.log("CARGAR RUTA ---->", fileWithOutExt);
  }
});

router.get("*", (req, res) => {
  res.status(404);
  res.send({ error: "Not found" });
});

// router.use(errorHandler);

module.exports = router; 