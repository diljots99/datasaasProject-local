const express = require("express");
const router = express.Router();
const filterController = require("../controller/filters");
const JWT = require("../utils/auth");


/**
 * @swagger
 *
 * /api/filters/business-search/listAll:
 *   get:
 *     summary: list Filters
 *     tags: [Filters]
 *     description: 
 *     produces:
 *       - application/json
 *     responses:
 *          '200':
 *              description: A Successfull response
 *          '422':
 *              description:  Validation error
 */
router.get("/business-search/listAll",filterController.listAllFilters)

/**
 * @swagger
 *
 * /api/filters/business-search/suggestions/{uuid}:
 *   post:
 *     summary: Filter suggestions
 *     tags: [Filters]
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
 *     responses:
 *          '200':
 *              description: A Successfull response
 *          '422':
 *              description:  Validation error
 */
router.post("/business-search/suggestions/:uuid",filterController.filterSuggestions)

module.exports = router;
