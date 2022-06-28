const dao = require("../dao/insights");
const errorlog = require("../../utils/logger").errorlog;
const successlog = require("../../utils/logger").successlog;
const messages = require("../../utils/messages");
const { Op, Sequelize } = require("sequelize");
const { getGeocode, getPolygonsCoordinates } = require("../services/locations");


async function getInsights(req, res) {

    let body = req.body

    if (body.filterData){
        let response = {
            "companiesByRegion": null,
            "companiesByCounty":null,
            "companiesByStatus": null,
            "companiesByAccountCategory": null,
            "companiesByType": null,
            "companiesByExporter": null,
            "companiesByImporter": null,
            "companiesBySector": null,
            "companiesBySICSection": null,
            "companiesByAgeOfBusiness": null,
            "companiesByEmployeeSize": null,
            "companiesBySICDivision": null,
            "companiesBySICCode": null,
            "companiesByTurnover": null,
            "companiesByGrossProfit": null,
            "companiesByProfitAndLoss": null,
            "companiesByEquity": null,
            "companiesByTurnoverFinacial": null
        }
        let data = {}
        let where = {}
        for (let filter of body.filterData){
            console.log(filter)
            where[filter.chip_group] = filter.chip_values[0].chip_value
            if(filter.chip_group == 'type'){
                response['companiesByType'] = await dao.getCompaniesByType({
                    where:{
                        type:filter.chip_values[0].chip_value
                    }
                })
            }
            if(filter.chip_group == 'status'){
                response['companiesByStatus'] = await dao.getCompaniesByStatus({
                    where:{
                        status:filter.chip_values[0].chip_value
                    }
                })
            }

        }
        data = {
            where : where
        }

        return res.send(response)
    }
    const companiesByRegion_raw = await dao.getCompaniesByRegion();
    let companiesByRegion = companiesByRegion_raw
    // for (let loc of companiesByRegion_raw) {
    //     let current_location = loc.toJSON()
    //     let geoCode = []
    //     if (current_location.address_region) {
    //         // geoCode = await getGeocode(current_location.address_region)
    //         geoCode = await getPolygonsCoordinates(current_location.address_region)
    //     }
    //     current_location = {
    //         properties: current_location,
    //         ...geoCode,

    //     }
    //     companiesByRegion.push(current_location)     
    // }
    // companiesByRegion = {
    //     type: "FeatureCollection",
    //     features: companiesByRegion
    // }

    const companiesByCounty_raw = await dao.getCompaniesByCounty()
    let companiesByCounty = companiesByCounty_raw


    // for (let loc of companiesByCounty_raw) {
    //     let current_location = loc.toJSON();        
    //     let geoCode = await getPolygonsCoordinates({county: current_location.county ,country : current_location.country})
    //     current_location = {
    //         properties: current_location,
    //         ...geoCode,
    
    //     }
    //     companiesByCounty.push(current_location)     
    // }
    
     

    res.send({  
        status: true,   
        "companiesByRegion": companiesByRegion,
        "companiesByCounty":companiesByCounty,
        "companiesByStatus": await dao.getCompaniesByStatus(),
        "companiesByAccountCategory": await dao.getCompaniesByAccountCategory(),
        "companiesByType": await dao.getCompaniesByType(),
        "companiesByExporter": await dao.getCompaniesByExporter(),
        "companiesByImporter": await dao.getCompaniesByImporter(),
        "companiesBySector": await dao.getCompaniesBySector(),
        "companiesBySICSection": await dao.getCompaniesBySICSection(),
        "companiesByAgeOfBusiness": await dao.getCompaniesByAgeOfBusiness(),
        "companiesByEmployeeSize": await dao.getCompaniesByEmployeeSize(),
        "companiesBySICDivision": await dao.getCompaniesBySICDivision(),
        "companiesBySICCode": await dao.getCmpaniesBySICCode(),
        "companiesByTurnover": await dao.getCompaniesByTurnover(),
        "companiesByGrossProfit": await dao.getCompaniesByGrossProfit(),
        "companiesByProfitAndLoss": await dao.getCompaniesByProfitAndLoss(),
        "companiesByEquity": await dao.getCompaniesByEquity(),
        "companiesByTurnoverFinacial": await dao.getCompaniesByTurnoverFinacial()
    })
}   

async function getInsightsCompaniesByCounty(req,res){
    const companiesByCounty_raw = await dao.getCompaniesByCounty()
    let companiesByCounty = []
    for (let loc of companiesByCounty_raw) {
        let current_location = loc.toJSON();        
        let geoCode = await getPolygonsCoordinates({county: current_location.county ,country : current_location.country})
        current_location = {
            properties: current_location,
            ...geoCode,

        }
        companiesByCounty.push(current_location)     
    }
    companiesByCounty = {
        type: "FeatureCollection",
        features: companiesByCounty
    }
    res.send({
        status: true,
        result:{
            "companiesByCounty":companiesByCounty
        }
    })
    
}

async function getInsightsCompaniesByRegion(req,res){
    const companiesByRegion_raw = await dao.getCompaniesByRegion();
    let companiesByRegion = []
    for (let loc of companiesByRegion_raw) {
        let current_location = loc.toJSON()
        let geoCode = []
        if (current_location.address_region) {
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
        type: "FeatureCollection",
        features: companiesByRegion
    }
    res.send({
        status: true,
        result:{
            "companiesByRegion":companiesByRegion
        }
    })
    
}

module.exports = {
    getInsights,
    getInsightsCompaniesByCounty,
    getInsightsCompaniesByRegion
}