const express = require("express");
const router = express.Router();
const userController = require("../routes/user");
const businessWatchController = require("../routes/business-watch");
const filterRouters = require("../routes/filters")
const testRouters = require("../routes/test")
const businessRouters = require("../routes/business")
const saved_searchesRouters = require("../routes/saved_searches")

router.use("/user", userController);
router.use("/business-watch", businessWatchController);
router.use("/business", businessRouters);
router.use("/saved-searches", saved_searchesRouters);
router.use("/filters", filterRouters);
router.use("/", testRouters);


module.exports = router;
