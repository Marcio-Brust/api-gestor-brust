const router = require("express").Router();

const createUserController = require("../controllers/createUserController");

// funcao

router
  .route("/createuser")
  .post((req, res) => createUserController.create(req, res));

module.exports = router;
