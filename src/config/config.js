const mongoose = require("mongoose");
require("dotenv").config(); 

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    await mongoose.connect(mongoURI);
    console.log("Conexão estabelecida!");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;