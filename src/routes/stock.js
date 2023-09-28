const router = require("express").Router();

const stockController = require("../controllers/stockController");

// funcao

router.route("/stock").post((req, res) => stockController.create(req, res));

module.exports = router;
