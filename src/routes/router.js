const router = require("express").Router();

// createUser

const createUserRouter = require("./createUsers");
const stock = require("./stock");

router.use("/", createUserRouter);
router.use("/", stock);

module.exports = router;
