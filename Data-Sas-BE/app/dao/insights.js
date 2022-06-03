const model = require("../../models");


async function getCompanies(data){
    return await model.companies.findAll(data)
}

async function getCompaniesOfficial(data){
    return await model.compines_offical.findAll(data)

}

module.exports = {
    getCompanies,
    getCompaniesOfficial
}