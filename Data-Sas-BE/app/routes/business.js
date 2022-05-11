const express = require("express");
const router = express.Router();
const businessController = require("../controller/business");
const JWT = require("../utils/auth");

/**
 * @swagger
 *
 * /api/business/search:
 *   post:
 *     summary: Search
 *     tags: [Business]
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
 router.post("/search/",businessController.businessSearch)




 /**
 * @swagger
 *
 * /api/business/{uuid}/people:
 *   get:
 *     summary: Search
 *     tags: [Business]
 *     description: 
 *     produces:
 *       - application/json
 *     security:
 *       - jwt: []
 *     parameters:
 *      - in: path
 *        name: uuid
 *        schema:
 *            type: string
 *        required: true
 *        description: Company uuid
 *      - in: query
 *        name: page
 *      - in: query
 *        name: item_per_page
 *     responses:
 *          '200':
 *              description: A Successfull response
 *          '422':
 *              description:  Validation error
 */
 router.get("/:uuid/people",JWT.authenticate,businessController.businessPeople)








module.exports = router