const CryptoJS = require("crypto-js");
const { v4: uuidv4 } = require("uuid");
const crptoKey = "secret_key_123";
const accessTokenSecret = "my_secrect_key";
const jwt = require("jsonwebtoken");
const helper = require("../helper/validator");
const dao = require("../dao/insights");
const errorlog = require("../../utils/logger").errorlog;
const successlog = require("../../utils/logger").successlog;
const messages = require("../../utils/messages");
const e = require("express");
const { Op, Sequelize } = require("sequelize");


async function getInsights(req, res) {
    const companiesByStatus = await dao.getCompaniesByStatus();


    const companiesByAccountCategory = await dao.getCompaniesByAccountCategory();

    const companiesByType = await dao.getCompaniesByType()

    const companiesByExporter = await dao.getCompaniesByExporter()
    
    const companiesByImporter = await dao.getCompaniesByImporter()

    const companiesBySector = await dao.getCompaniesBySector()

    const companiesBySICSection = await dao.getCompaniesBySICSection()

    const companiesBySICDivision = await dao.getCompaniesBySICDivision()


    const companiesBySICCode = await dao.getCmpaniesBySICCode();

    const companiesByAgeOfBusiness = await dao.getCompaniesByAgeOfBusiness()
    const companiesByEmployeeSize = await dao.getCompaniesByEmployeeSize()
    const companiesByTurnover = await dao.getCompaniesByTurnover();

    const companiesByEquity = await dao.getCompaniesByEquity()
    const companiesByGrossProfit = await dao.getCompaniesByGrossProfit()
    const companiesByProfitAndLoss = await dao.getCompaniesByProfitAndLoss()


    res.send({ 
        status: true, 
        "companiesByStatus": companiesByStatus, 
        "companiesByAccountCategory": companiesByAccountCategory, 
        "companiesByType": companiesByType, 
        "companiesByExporter": companiesByExporter,
        "companiesByImporter": companiesByImporter,
        "companiesBySector": companiesBySector,
        "companiesBySICSection": companiesBySICSection,
        "companiesByAgeOfBusiness":companiesByAgeOfBusiness,
        "companiesByEmployeeSize":companiesByEmployeeSize,
        "companiesBySICDivision":companiesBySICDivision,
        "companiesBySICCode":companiesBySICCode,
        "companiesByTurnover":companiesByTurnover })
}


module.exports = {
    getInsights
}