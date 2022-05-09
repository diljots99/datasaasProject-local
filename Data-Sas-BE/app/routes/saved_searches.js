const express = require("express");
const router = express.Router();
const businessController = require("../controller/business");
const JWT = require("../utils/auth");

/**
 * @swagger
 *
 * /api/saved-searches/create:
 *   post:
 *     summary: Create
 *     tags: [Saved Searches]
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
 *                filterName:
 *                  type: string
 *                searchType:
 *                  type: string
 *                  enum: [Business Search, desc]
 *                chipData:
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
 router.post("/create/",businessController.businessSearch)








module.exports = router