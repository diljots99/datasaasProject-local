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
 *     requestBody:
 *        description:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                page:
 *                  type: integer
 *                  default: 1
 *                items_per_page:
 *                  type: integer
 *                  default: 25
 *                query:
 *                  type: string
 *                filterData:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          chip_group:
 *                             type: string
 *                          chip_values:
 *                             type: array
 *                             items:
 *                                  type: object
 *                                  properties:
 *                                      chip_value:
 *                                          type: string
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
 
/**
 * @swagger
 *
 * /api/insights/companiesByRegion:
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
 router.post("/companiesByRegion",JWT.authenticate,savedSearchController.getInsightsCompaniesByRegion)

module.exports = router