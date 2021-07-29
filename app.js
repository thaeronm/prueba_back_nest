require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
require('./src/config/db.config')

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

app.use("/api", require("./src/modules"));



app.listen(PORT, () => {
  console.log("API lista por el puerto ", PORT);
});
