const express = require("express");
const router = express.Router();
const savedSearchController = require("../controller/saved-searches");
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
 *                fliter_name:
 *                  type: string
 *                search_type:
 *                  type: string
 *                  enum: [Business Search, desc]
 *                chip_data:
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
 router.post("/create/",JWT.authenticate,savedSearchController.createSavedSearch)


/**
 * @swagger
 *
 * /api/saved-searches/list:
 *   post:
 *     summary: List all Saved Searched for a user
 *     tags: [Saved Searches]
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
 router.post("/list/",JWT.authenticate,savedSearchController.listUserSavedSearches)








module.exports = router