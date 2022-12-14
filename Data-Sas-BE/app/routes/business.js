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
 *     description: |
 *       Company Name | Company Number | Website | Telephone | Mail | Company Account Category | Post Code | City | County | Region | Country | Status | Incorporation date | Dissolution Date | Company Category | Last Accounts Date | UK SIC Section | SubSector | Sector | NACE | UK SIC | NAICS | Current Assets | Director Name | Director Role | Director Occupation | Director Nationality | Director Country of Residence | Director Resign Date | Director Appointment Date  | Ownership Name | Ownership Kind | Ownership Nationality | Ownership Country of Residence | Fixed Assets | Equity | Turnover | Number of Employees | Trade Creditors | Trade Debtors | Gross Profit | Importer Status | Exporter Status 
 *       </br> date formats:  YYYY-MM-DDTHH:MM:SS+05:30   2018-01-29T13:20:22+05:30
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



/**
 * @swagger
 *
 * /api/business/{uuid}/directors:
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
 router.get("/:uuid/directors",JWT.authenticate,businessController.businessDirectors)



/**
 * @swagger
 *
 * /api/business/{uuid}/trade:
 *   get:
 *     summary: Trade
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
 router.get("/:uuid/trade",JWT.authenticate,businessController.businessTrade)


 /**
 * @swagger
 *
 * /api/business/{uuid}/tradingAddress:
 *   get:
 *     summary: tradingAddress
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
  router.get("/:uuid/tradingAddress",JWT.authenticate,businessController.businessTradeAddress)

   /**
 * @swagger
 *
 * /api/business/{uuid}/overview/about:
 *   get:
 *     summary: overview
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
    router.get("/:uuid/overview/about",JWT.authenticate,businessController.businessOverviewAbout)

module.exports = router