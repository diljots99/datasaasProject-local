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


async function getInsights(req,res){
    const companiesByStatus  =  await dao.getCompanies({
        attributes : ["chn","status",[Sequelize.fn('COUNT', 'status'), 'statusCount']],
        group:"status"
    })
    const companiesBySize  =  await dao.getCompanies({
        attributes : ["chn","size_estimate",[Sequelize.fn('COUNT', 'size_estimate'), 'size_estimateCount']],
        group:"size_estimate"
    })
    const companiesByAccountCategory  =  await dao.getCompanies({
        attributes : ["chn","company_account_category",[Sequelize.fn('COUNT', 'company_account_category'), 'accountCategoryCount']],
        group:"company_account_category"
    })
    const companiesByType  =  await dao.getCompanies({
        attributes : ["chn","type",[Sequelize.fn('COUNT', 'type'), 'typeCount']],
        group:"type"
    })
    res.send({status:true,"companiesByStatus":companiesByStatus,"companiesByAccountCategory":companiesByAccountCategory,"companiesBySize":[],"companiesByType":companiesByType})
}


module.exports = {
    getInsights
}