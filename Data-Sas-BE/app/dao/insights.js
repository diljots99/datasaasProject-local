const model = require("../../models");
const { Op, Sequelize } = require("sequelize");
const { floor }  = require("mathjs")

async function getCompanies(data){
    return await model.companies.findAll(data)
}

async function getCompaniesOfficial(data){
    return await model.compines_offical.findAll(data)

}

async function getCompaniesByEmployeeSize(data){
    let max_size_estimate =  await model.companies.findOne({
        attributes: [
           
            [Sequelize.literal('MAX(size_estimate)'), "max_size_estimate"]
        ],
        ...data
    })
    max_size_estimate = max_size_estimate? max_size_estimate.dataValues.max_size_estimate: 0

    let interval = max_size_estimate / 6
    
    interval = floor(interval)
    
    return await model.companies.findAll({
        attributes: [
             [Sequelize.literal(`COUNT(CASE WHEN size_estimate = 0 THEN 1 END)`), "0"],
             [Sequelize.literal(`COUNT(CASE WHEN size_estimate > 0 and size_estimate <=${interval} THEN 1 END)`), `0 - ${interval}`],
             [Sequelize.literal(`COUNT(CASE WHEN size_estimate > ${interval} and size_estimate <=${interval*2} THEN 1 END)`), `${interval} - ${interval*2}`],
             [Sequelize.literal(`COUNT(CASE WHEN size_estimate > ${interval*2} and size_estimate <= ${interval*3} THEN 1 END)`), `${interval*2} - ${interval*3}`],
             [Sequelize.literal(`COUNT(CASE WHEN size_estimate > ${interval*3} and size_estimate <= ${interval*4} THEN 1 END)`), `${interval*3} - ${interval*4}`],
             [Sequelize.literal(`COUNT(CASE WHEN size_estimate > ${interval*4} and size_estimate <= ${interval*5} THEN 1 END)`), `${interval*4} - ${interval*5}`],
             [Sequelize.literal(`COUNT(CASE WHEN size_estimate > ${interval*5} THEN 1 END)`), `> ${interval*5}`]
             
            ]
        
    })
}

async function getCompaniesByAgeOfBusiness(data){
    let max_size_estimate =  await model.companies.findOne({
        attributes: [
           
            [Sequelize.literal('MAX(age_of_business)'), "max_size_estimate"]
        ],
        ...data
    })
    max_size_estimate = max_size_estimate? max_size_estimate.dataValues.max_size_estimate: 0

    let interval = max_size_estimate / 6
    
    interval = floor(interval)

    return await model.companies.findAll({
        attributes: [
             [Sequelize.literal(`COUNT(CASE WHEN age_of_business = 0 THEN 1 END)`), "0"],
             [Sequelize.literal(`COUNT(CASE WHEN age_of_business > 0 and age_of_business <=${interval} THEN 1 END)`), `0 - ${interval}`],
             [Sequelize.literal(`COUNT(CASE WHEN age_of_business > ${interval} and age_of_business <=${interval*2} THEN 1 END)`), `${interval} - ${interval*2}`],
             [Sequelize.literal(`COUNT(CASE WHEN age_of_business > ${interval*2} and age_of_business <= ${interval*3} THEN 1 END)`), `${interval*2} - ${interval*3}`],
             [Sequelize.literal(`COUNT(CASE WHEN age_of_business > ${interval*3} and age_of_business <= ${interval*4} THEN 1 END)`), `${interval*3} - ${interval*4}`],
             [Sequelize.literal(`COUNT(CASE WHEN age_of_business > ${interval*4} and age_of_business <= ${interval*5} THEN 1 END)`), `${interval*4} - ${interval*5}`],
             [Sequelize.literal(`COUNT(CASE WHEN age_of_business > ${interval*5} THEN 1 END)`), `> ${interval*5}`]
             
            ]
        
    })
}

async function getCompaniesByTurnover(data){
    let maximum =  await model.companies.findOne({
        attributes: [
           [Sequelize.literal('MAX(turnover_estimate)'), "maximum"]
        ],
        ...data
    })
    let minimum =  await model.companies.findOne({
        attributes: [
           [Sequelize.literal('MIN(turnover_estimate)'), "minimum"]
        ],
        ...data
    })
    maximum = maximum? maximum.dataValues.maximum: 0
    minimum = minimum? minimum.dataValues.minimum: 0

    let diffrence = maximum - minimum
    let interval = diffrence / 7
    
    interval = floor(interval)

    return await model.companies.findAll({
        attributes: [
             [Sequelize.literal(`COUNT(CASE WHEN turnover_estimate = ${ minimum} and turnover_estimate <= ${ minimum + interval} THEN 1 END)`), `${ minimum} - ${ minimum + interval} `],
             [Sequelize.literal(`COUNT(CASE WHEN turnover_estimate > ${minimum + interval} and turnover_estimate <=${minimum + interval} THEN 1 END)`), `${ minimum + interval} - ${ minimum + interval*2} `],
             [Sequelize.literal(`COUNT(CASE WHEN turnover_estimate > ${minimum + interval*2} and turnover_estimate <=${minimum + interval*2} THEN 1 END)`), `${ minimum + interval*2} - ${ minimum + interval*3} `],
             [Sequelize.literal(`COUNT(CASE WHEN turnover_estimate > ${minimum + interval*3} and turnover_estimate <= ${minimum + interval*3} THEN 1 END)`), `${ minimum + interval*3} - ${ minimum + interval*4} `],
             [Sequelize.literal(`COUNT(CASE WHEN turnover_estimate > ${minimum + interval*4} and turnover_estimate <= ${minimum + interval*4} THEN 1 END)`), `${ minimum + interval*4} - ${ minimum + interval*5} `],
             [Sequelize.literal(`COUNT(CASE WHEN turnover_estimate > ${minimum + interval*5} and turnover_estimate <= ${minimum + interval*5} THEN 1 END)`), `${ minimum + interval*5} - ${ minimum + interval*6} `],
             [Sequelize.literal(`COUNT(CASE WHEN turnover_estimate > ${minimum + interval*6} THEN 1 END)`), `> ${ minimum + interval*6}`]
             
            ]
        
    })
}

module.exports = {
    getCompanies,
    getCompaniesOfficial,
    getCompaniesByEmployeeSize,
    getCompaniesByAgeOfBusiness,
    getCompaniesByTurnover
}