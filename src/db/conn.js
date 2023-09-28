const mongoose = require("mongoose");

const main = async () => {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://marciobrust:BfTt5Xw5F66Xtktl@cluster0.riztaq3.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Conectado ao banco!!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
};

module.exports = main;
