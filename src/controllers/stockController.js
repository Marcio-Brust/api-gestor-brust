const { Stock: stockModels } = require("../models/Stock");

const stockController = {
  create: async (req, res) => {
    try {
      const stock = {
        name: req.body.name,
        price: req.body.price,
        amount: req.body.amount,
      };

      const response = await stockModels.create(stock);

      res
        .status(201)
        .json({ response, msg: "Produto cadastrado com sucesso!!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = stockController;
