const express = require("express");
const router = express.Router();
const userController = require("../routes/user");
const businessWatchController = require("../routes/business-watch");

router.use("/user", userController);
router.use("/business-watch", businessWatchController);

module.exports = router;
