const express = require("express");
const cors = require("cors");
const nocache = require("nocache");
const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSSequelize = require('@adminjs/sequelize')
const db = require('./models');

const app = express();
app.use(cors());
app.use(nocache());
app.disable("x-powered-by");
// parse requests of content-type - application/json
app.use(express.json({ limit: "20mb" }));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(                                                                                                                                                                                                                                                                                       
  express.urlencoded({ limit: "20mb", extended: true, parameterLimit: 50000 })
);
// simple test route
app.get("/", (req, res) => {
  res.send("Welcome to data-saas application.");
}); 
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Data SAAS',
      version: '1.0.0',
    },
    servers:[
      {
        url:"/"
      },{
        url:"http://65.1.17.209:8080/"
      }
    ],
    components: {
      securitySchemes: {
        jwt: {
          type: "http",
          scheme: "bearer",
          in: "header",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ['./app/routes/*.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

// const multer = require('multer')
// const upload = multer({
// 	dest: 'uploads'
// })

//COMMON CODE AND FILES , VALIDATION , MESSAGES , LOGS FILE
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
app.use("/api", require("./app/routes")).use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*"); // allow request from all origin
  response.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  response.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization, refreshToken"
  );
  next();
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;


AdminJS.registerAdapter(AdminJSSequelize)

const adminJs = new AdminJS({
  databases: [db],
  rootPath: '/admin',
  branding: {
    companyName: 'Data SAas',
  },
})

const router = AdminJSExpress.buildRouter(adminJs)

app.use(adminJs.options.rootPath, router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
