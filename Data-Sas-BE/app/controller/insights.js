const dao = require("../dao/insights");
const errorlog = require("../../utils/logger").errorlog;
const successlog = require("../../utils/logger").successlog;
const messages = require("../../utils/messages");
const { Op, Sequelize } = require("sequelize");
const {getGeocode} = require("../services/locations");


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
    const companiesByRegion_raw= await dao.getCompaniesByRegion();
    let companiesByRegion = []
    for(let loc of companiesByRegion_raw) {

        let current_location = loc.toJSON()
        let geoCode = []    
        if (current_location.address_region){
            geoCode = await getGeocode(current_location.address_region)
        }

        current_location = {
        geocode_suggestions:geoCode, 
        ...current_location,
        }
        companiesByRegion.push(current_location)
    }

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
        "companiesByTurnover":companiesByTurnover,
        "companiesByRegion":companiesByRegion
    })
}


module.exports = {
    getInsights
}