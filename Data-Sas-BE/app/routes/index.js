const express = require("express");
const router = express.Router();
const userController = require("../routes/user");
const businessWatchController = require("../routes/business-watch");
const filterRouters = require("../routes/filters")

router.use("/user", userController);
router.use("/business-watch", businessWatchController);
router.use("/filters", filterRouters);


module.exports = router;
