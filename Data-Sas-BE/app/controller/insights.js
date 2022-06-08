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
    const companiesByStatus = await dao.getCompanies({
        attributes: ["status", [Sequelize.fn('COUNT', 'status'), 'statusCount'], [Sequelize.literal('(count(*)  * 100.0 / SUM(COUNT(*))  OVER() )'), "percentage"]],
        group: "status"
    })


    const companiesByAccountCategory = await dao.getCompanies({
        attributes: ["company_account_category", [Sequelize.fn('COUNT', 'company_account_category'), 'accountCategoryCount'], [Sequelize.literal('(count(*)  * 100.0 / SUM(COUNT(*))  OVER() )'), "percentage"]],
        group: "company_account_category"
    })
    const companiesByType = await dao.getCompanies({
        attributes: ["type", [Sequelize.fn('COUNT', 'type'), 'typeCount'], [Sequelize.literal('(count(*)  * 100.0 / SUM(COUNT(*))  OVER() )'), "percentage"]],
        group: "type"
    })

    const companiesByExporter = await dao.getCompanies({
        attributes: ["exporter", [Sequelize.fn('COUNT', 'exporter'), 'exporterCount'], [Sequelize.literal('(count(*)  * 100.0 / SUM(COUNT(*))  OVER() )'), "percentage"]],
        group: "exporter"
    })
    const companiesByImporter = await dao.getCompanies({
        attributes: ["importer", [Sequelize.fn('COUNT', 'importer'), 'importerCount'], [Sequelize.literal('(count(*)  * 100.0 / SUM(COUNT(*))  OVER() )'), "percentage"]],
        group: "importer"
    })


    const companiesBySector = await dao.getCompanies({
        attributes: ["main_sector", [Sequelize.fn('COUNT', 'main_sector'), 'sectorCount'], [Sequelize.literal('(count(*)  * 100.0 / SUM(COUNT(*))  OVER() )'), "percentage"]],
        group: "main_sector"
    })

    const companiesBySICSection = await dao.getCompanies({
        attributes: ["sic_section", [Sequelize.fn('COUNT', 'sic_section'), 'sectorCount'], [Sequelize.literal('(count(*)  * 100.0 / SUM(COUNT(*))  OVER() )'), "percentage"]],
        group: "sic_section"
    })

    const companiesByAgeOfBusiness = await dao.getCompanies({
        attributes: ["age_of_business", [Sequelize.fn('COUNT', 'sic_section'), 'sectorCount'], [Sequelize.literal('(count(*)  * 100.0 / SUM(COUNT(*))  OVER() )'), "percentage"]],
        group: "age_of_business"
    })
    const companiesByEmployeeSize = await dao.getCompanies({
        attributes: ["size_estimate", [Sequelize.fn('COUNT', 'sic_section'), 'sectorCount'], [Sequelize.literal('(count(*)  * 100.0 / SUM(COUNT(*))  OVER() )'), "percentage"]],
        group: "size_estimate"
    })
    
    

    res.send({ 
        status: true, 
        "companiesByStatus": companiesByStatus, 
        "companiesByAccountCategory": companiesByAccountCategory, 
        "companiesBySize": [], 
        "companiesByType": companiesByType, 
        "companiesByExporter": companiesByExporter,
        "companiesByImporter": companiesByImporter,
        "companiesBySector": companiesBySector,
        "companiesBySICSection": companiesBySICSection,
        "companiesByEmployeeSize":companiesByEmployeeSize })
}


module.exports = {
    getInsights
}