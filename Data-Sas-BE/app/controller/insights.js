const dao = require("../dao/insights");
const errorlog = require("../../utils/logger").errorlog;
const successlog = require("../../utils/logger").successlog;
const messages = require("../../utils/messages");
const { Op, Sequelize } = require("sequelize");
const { getGeocode, getPolygonsCoordinates } = require("../services/locations");


async function getInsights(req, res) {

    let body = req.body

    if (body.filterData) {

        let data = {}
        let where = {}
        for (let filter of body.filterData) {
            if (filter.chip_group == 'type') {
                let list_ofChipData = [];
                filter.chip_values.forEach((chip_value) => {
                    list_ofChipData.push({ type: `${chip_value.chip_value}` });
                });
                let arr = list_ofChipData.concat(where.conditions ? where.conditions : [])
                where.conditions = arr

            }
            if (filter.chip_group == 'status') {
                let list_ofChipData = [];
                filter.chip_values.forEach((chip_value) => {
                    list_ofChipData.push({ status: `${chip_value.chip_value}` });
                });
                let arr = list_ofChipData.concat(where.conditions ? where.conditions : [])
                where.conditions = arr
            }
            if (filter.chip_group == 'region') {
                let list_ofChipData = [];
                filter.chip_values.forEach((chip_value) => {
                    list_ofChipData.push({ region: `${chip_value.chip_value}` });
                });
                let arr = list_ofChipData.concat(where.conditions ? where.conditions : [])
                where.conditions = arr
            }
            if (filter.chip_group == 'county') {
                let list_ofChipData = [];
                filter.chip_values.forEach((chip_value) => {
                    list_ofChipData.push({ county: `${chip_value.chip_value}` });
                });
                let arr = list_ofChipData.concat(where.conditions ? where.conditions : [])
                where.conditions = arr
            }
            if (filter.chip_group == 'size') {
                let list_ofChipData = [];
                filter.chip_values.forEach((chip_value) => {
                    list_ofChipData.push({ size_class_estimate: `${chip_value.chip_value}` });
                });
                let arr = list_ofChipData.concat(where.conditions ? where.conditions : [])
                where.conditions = arr
            }
            if (filter.chip_group == 'turnover') {
                let list_ofChipData = [];
                filter.chip_values.forEach((chip_value) => {
                    list_ofChipData.push({ turnover_class_estimate: `${chip_value.chip_value}` });
                });
                let arr = list_ofChipData.concat(where.conditions ? where.conditions : [])
                where.conditions = arr
            }
            if (filter.chip_group == 'importer') {
                let list_ofChipData = [];
                filter.chip_values.forEach((chip_value) => {
                    list_ofChipData.push({ importer: `${chip_value.chip_value}` });
                });
                let arr = list_ofChipData.concat(where.conditions ? where.conditions : [])
                where.conditions = arr
            }
            if (filter.chip_group == 'exporter') {
                let list_ofChipData = [];
                filter.chip_values.forEach((chip_value) => {
                    list_ofChipData.push({ exporter: `${chip_value.chip_value}` });
                });
                let arr = list_ofChipData.concat(where.conditions ? where.conditions : [])
                where.conditions = arr
            }
            if (filter.chip_group == 'sic section') {
                let list_ofChipData = [];
                filter.chip_values.forEach((chip_value) => {
                    list_ofChipData.push({ sic_section: `${chip_value.chip_value}` });
                });
                let arr = list_ofChipData.concat(where.conditions ? where.conditions : [])
                where.conditions = arr
            }

        }

        if (where.conditions) {

            where = {
                [Op.and]: where.conditions,
                ...where
            }

            delete where.conditions
            data = {
                where: where
            }
        }
        let response = {
            status: true,
            "companiesByRegion": await dao.getCompaniesByRegion(data),
            "companiesByCounty": await dao.getCompaniesByCounty(data),
            "companiesByStatus": await dao.getCompaniesByStatus(data),
            "companiesByAccountCategory": await dao.getCompaniesByAccountCategory(data),
            "companiesByType": await dao.getCompaniesByType(data),
            "companiesByExporter": await dao.getCompaniesByExporter(data),
            "companiesByImporter": await dao.getCompaniesByImporter(data),
            "companiesBySector": await dao.getCompaniesBySector(data),
            "companiesBySICSection": await dao.getCompaniesBySICSection(data),
            "companiesByAgeOfBusiness": await dao.getCompaniesByAgeOfBusiness(data),
            "companiesByEmployeeSize": await dao.getCompaniesByEmployeeSize(data),
            "companiesBySICDivision": await dao.getCompaniesBySICDivision(data),
            "companiesBySICCode": await dao.getCmpaniesBySICCode(data),
            "companiesByTurnover": await dao.getCompaniesByTurnover(data),
            "companiesByGrossProfit": await dao.getCompaniesByGrossProfit(),
            "companiesByProfitAndLoss": await dao.getCompaniesByProfitAndLoss(),
            "companiesByEquity": await dao.getCompaniesByEquity(),
            "companiesByTurnoverFinacial": await dao.getCompaniesByTurnoverFinacial()
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
        "companiesByCounty": companiesByCounty,
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

async function getInsightsCompaniesByCounty(req, res) {
    const companiesByCounty_raw = await dao.getCompaniesByCounty()
    let companiesByCounty = []
    for (let loc of companiesByCounty_raw) {
        let current_location = loc.toJSON();
        let geoCode = await getPolygonsCoordinates({ county: current_location.county, country: current_location.country })
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
        result: {
            "companiesByCounty": companiesByCounty
        }
    })

}

async function getInsightsCompaniesByRegion(req, res) {
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
        result: {
            "companiesByRegion": companiesByRegion
        }
    })

}

module.exports = {
    getInsights,
    getInsightsCompaniesByCounty,
    getInsightsCompaniesByRegion
}