const express = require("express");
const router = express.Router();
const savedSearchController = require("../controller/insights");    
const JWT = require("../utils/auth");



/**
 * @swagger
 *
 * /api/insights/:
 *   post:  
 *     summary: 
 *     tags: [Insights]
 *     description: 
 *     produces:
 *       - application/json
 *     security:
 *       - jwt: []  
 *     responses:
 *          '200':  
 *              description: A Successfull response
 *          '422':
 *              description:  Validation error
 */
 router.post("/",JWT.authenticate,savedSearchController.getInsights)


/**
 * @swagger
 *
 * /api/insights/companiesByCounty:
 *   post:  
 *     summary: 
 *     tags: [Insights]
 *     description: 
 *     produces:
 *       - application/json
 *     security:
 *       - jwt: []  
 *     responses:
 *          '200':  
 *              description: A Successfull response
 *          '422':
 *              description:  Validation error
 */
 router.post("/companiesByCounty",JWT.authenticate,savedSearchController.getInsightsCompaniesByCounty)

module.exports = router