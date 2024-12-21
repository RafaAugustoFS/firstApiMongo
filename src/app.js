const express = require("express");
const connectDB = require("./config/config");
const app = express();
const router = require("./routers/router.js")
app.use(express.json());
app.use("/api", router);
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  console.log("Api no ar!");
});