const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
const JWT = require("../utils/auth");

//user Login/SignUp JWT.authenticate

/**
 * @swagger
 *
 * /api/user/user-sign-up:
 *   post:
 *     summary: Create New User
 *     tags: [Authentication]
 *     description: This enpoint is used to create a new user in this system
 *     produces:
 *       - application/json
 *     requestBody:
 *        description: sas
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 * 
 *              properties:
 *                u_first_name:
 *                  type: string
 *                u_last_name:
 *                  type: string
 *                u_country_code:
 *                  type: string
 *                u_phone_no:
 *                  type: string
 *                u_company_name:
 *                  type: string
 *                u_company_no:
 *                  type: string
 *                u_city:
 *                  type: string
 *                u_email:
 *                  type: string
 *                u_country:
 *                  type: string
 *                u_county:
 *                  type: string
 *                u_address:
 *                  type: string
 *                u_postal_code:
 *                  type: string
 *                u_email_option:
 *                  type: string
 *                u_password:
 *                  type: string
 *                u_subscriptions_id:
 *                  type: string
 *     responses:
 *          '200':
 *              description: A Successfull response
 *          '422':
 *              description:  Validation error
 */
router.post("/user-sign-up", userController.signup);

/**
 * @swagger
 *
 * /api/user/user-login:
 *   post:
 *     summary: Login
 *     tags: [Authentication]
 *     description: 
 *     produces:
 *       - application/json
 *     requestBody:
 *        description: sas
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                u_email:
 *                  type: string
 *                u_password:
 *                  type: string
 *     responses:
 *          '200':
 *              description: A Successfull response
 *          '422':
 *              description:  Validation error
 */
router.post("/user-login", userController.login);

/**
 * @swagger
 *
 * /api/user/user/{uuid}:
 *   get:
 *     summary: get user by id
 *     tags: [Authentication]
 *     description: 
 *     produces:
 *       - application/json
 *     security:
 *       - jwt: []
 *     parameters:
 *      - in: path
 *        name: uuid
 *        required: true
 *        type: string
 *     responses:
 *          '200':
 *              description: A Successfull response
 *          '422':
 *              description:  Validation error
 */
router.get("/user/:uuid", JWT.authenticate, userController.getUser);

/**
 * @swagger
 *
 * /api/user/user:
 *   get:
 *     summary: get all users
 *     tags: [Authentication]
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
router.get("/user", JWT.authenticate, userController.getUser);

/**
 * @swagger
 *
 * /api/user/user:
 *   put:
 *     summary: updateUser
 *     tags: [Authentication]
 *     description: 
 *     produces:
 *       - application/json
 *     security:
 *       - jwt: []
 *     requestBody:
 *        description: sas
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                uuid:
 *                  type: string
 *                u_first_name:
 *                  type: string
 *                u_last_name:
 *                  type: string
 *                u_country_code:
 *                  type: string
 *                u_county:
 *                  type: string
 *                u_phone_no:
 *                  type: string
 *                u_company_name:
 *                  type: string
 *                u_company_no:
 *                  type: string
 *                u_city:
 *                  type: string
 *                u_email:
 *                  type: string
 *                u_country:
 *                  type: string
 *                u_address:
 *                  type: string
 *                u_postal_code:
 *                  type: string
 *                u_email_option:
 *                  type: string
 *     responses:
 *          '200':
 *              description: A Successfull response
 *          '422':
 *              description:  Validation error
 */
router.put("/user", userController.updateUser);

/**
 * @swagger
 *
 * /api/user/user-change-password:
 *   post:
 *     summary: updateUser
 *     tags: [Authentication]
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
 *                u_email:
 *                  type: string
 *                old_password:
 *                  type: string
 *                new_password:
 *                  type: string
 *     responses:
 *          '200':
 *              description: A Successfull response
 *          '422':
 *              description:  Validation error
 */
router.post(
  "/user-change-password",
  userController.changePassword
);

//JobSeeker Deatils
//router.post('/addJobSeekerInfo',JWT.authenticate, controller.addJobSeekerInfo);

module.exports = router;
