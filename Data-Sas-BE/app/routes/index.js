const express = require("express");
const router = express.Router();
const userController = require("../routes/user");
const businessWatchController = require("../routes/business-watch");
const filterRouters = require("../routes/filters")
const csvRouters = require("../routes/csv_seed_uploder")
const businessRouters = require("../routes/business")
const saved_searchesRouters = require("../routes/saved_searches")

router.use("/user", userController);
router.use("/business-watch", businessWatchController);
router.use("/business", businessRouters);
router.use("/saved-searches", saved_searchesRouters);
router.use("/filters", filterRouters);
router.use("/seed_csv", csvRouters);


module.exports = router;
