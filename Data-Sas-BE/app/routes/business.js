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
 *                                  type: string
 *     responses:
 *          '200':
 *              description: A Successfull response
 *          '422':
 *              description:  Validation error
 */
 router.post("/search/",businessController.businessSearch)








module.exports = router