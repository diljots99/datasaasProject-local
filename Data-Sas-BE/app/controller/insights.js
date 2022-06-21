const dao = require("../dao/insights");
const errorlog = require("../../utils/logger").errorlog;
const successlog = require("../../utils/logger").successlog;
const messages = require("../../utils/messages");
const { Op, Sequelize } = require("sequelize");
const {getGeocode,getPolygonsCoordinates} = require("../services/locations");


async function getInsights(req, res) {
    

    const companiesByRegion_raw= await dao.getCompaniesByRegion();
    let companiesByRegion = []
    for(let loc of companiesByRegion_raw) {

        let current_location = loc.toJSON()
        let geoCode = []    
        if (current_location.address_region){
            // geoCode = await getGeocode(current_location.address_region)
            geoCode = await getPolygonsCoordinates(current_location.address_region)

        }

        current_location = {
        properties: current_location,
        ...geoCode, 
        
        }   
        companiesByRegion.push(current_location)
        }
    
        companiesByRegion = {
            type:"FeatureCollection",
            features :companiesByRegion
        } 
    res.send({  
        status: true, 
        "companiesByRegion":companiesByRegion,
        "companiesByStatus": await dao.getCompaniesByStatus(), 
        "companiesByAccountCategory": await dao.getCompaniesByAccountCategory(), 
        "companiesByType": await dao.getCompaniesByType(), 
        "companiesByExporter": await dao.getCompaniesByExporter(),
        "companiesByImporter": await dao.getCompaniesByImporter(),
        "companiesBySector": await dao.getCompaniesBySector(),
        "companiesBySICSection": await dao.getCompaniesBySICSection(),
        "companiesByAgeOfBusiness":await dao.getCompaniesByAgeOfBusiness(),
        "companiesByEmployeeSize":await dao.getCompaniesByEmployeeSize(),
        "companiesBySICDivision": await dao.getCompaniesBySICDivision(),
        "companiesBySICCode":await dao.getCmpaniesBySICCode(),
        "companiesByTurnover":await dao.getCompaniesByTurnover(),
        "companiesByGrossProfit":await dao.getCompaniesByGrossProfit(),
        "companiesByProfitAndLoss": await dao.getCompaniesByProfitAndLoss(),
        "companiesByEquity":await dao.getCompaniesByEquity(),
        "companiesByTurnoverFinacial":await dao.getCompaniesByTurnoverFinacial()
    })
}


module.exports = {
    getInsights
}