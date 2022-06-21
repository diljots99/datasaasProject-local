const model = require("../../models");
const { Op, Sequelize } = require("sequelize");
const { floor } = require("mathjs")

async function getCompanies(data) {
    return await model.companies.findAll(data)
}

async function getCompaniesOfficial(data) {         
    return await model.compines_offical.findAll(data)   

}

async function getCompaniesByEmployeeSize(data) {
    // let max_size_estimate = await model.companies.findOne({
    //     attributes: [

    //         [Sequelize.literal('MAX(size_estimate)'), "max_size_estimate"]
    //     ],
    //     ...data
    // })
    // max_size_estimate = max_size_estimate ? max_size_estimate.dataValues.max_size_estimate : 0

    // let interval = max_size_estimate / 6

    // interval = floor(interval)

    // return await model.companies.findAll({
    //     attributes: [
    //         [Sequelize.literal(`COUNT(CASE WHEN size_estimate = 0 THEN 1 END)`), "0"],
    //         [Sequelize.literal(`COUNT(CASE WHEN size_estimate > 0 and size_estimate <=${interval} THEN 1 END)`), `0 - ${interval}`],
    //         [Sequelize.literal(`COUNT(CASE WHEN size_estimate > ${interval} and size_estimate <=${interval * 2} THEN 1 END)`), `${interval} - ${interval * 2}`],
    //         [Sequelize.literal(`COUNT(CASE WHEN size_estimate > ${interval * 2} and size_estimate <= ${interval * 3} THEN 1 END)`), `${interval * 2} - ${interval * 3}`],
    //         [Sequelize.literal(`COUNT(CASE WHEN size_estimate > ${interval * 3} and size_estimate <= ${interval * 4} THEN 1 END)`), `${interval * 3} - ${interval * 4}`],
    //         [Sequelize.literal(`COUNT(CASE WHEN size_estimate > ${interval * 4} and size_estimate <= ${interval * 5} THEN 1 END)`), `${interval * 4} - ${interval * 5}`],
    //         [Sequelize.literal(`COUNT(CASE WHEN size_estimate > ${interval * 5} THEN 1 END)`), `> ${interval * 5}`]

    //     ]

    // })


    return await model.companies.findAll({
        attributes:[
            'size_class_estimate',
            [Sequelize.fn('COUNT',Sequelize.col('size_class_estimate')),"number_of_companies"]
            
        ],
        group:['size_class_estimate']
    })
}
async function getCompaniesByTurnover(data) {
    // let maximum = await model.companies.findOne({
    //     attributes: [
    //         [Sequelize.literal('MAX(turnover_estimate)'), "maximum"]
    //     ],
    //     ...data
    // })
    // let minimum = await model.companies.findOne({
    //     attributes: [
    //         [Sequelize.literal('MIN(turnover_estimate)'), "minimum"]
    //     ],
    //     ...data
    // })
    // maximum = maximum ? maximum.dataValues.maximum : 0
    // minimum = minimum ? minimum.dataValues.minimum : 0

    // let diffrence = maximum - minimum
    // let interval = diffrence / 7

    // interval = floor(interval)

    // return await model.companies.findAll({
    //     attributes: [
    //         [Sequelize.literal(`COUNT(CASE WHEN turnover_estimate = ${minimum} and turnover_estimate <= ${minimum + interval} THEN 1 END)`), `${minimum} - ${minimum + interval} `],
    //         [Sequelize.literal(`COUNT(CASE WHEN turnover_estimate > ${minimum + interval} and turnover_estimate <=${minimum + interval} THEN 1 END)`), `${minimum + interval} - ${minimum + interval * 2} `],
    //         [Sequelize.literal(`COUNT(CASE WHEN turnover_estimate > ${minimum + interval * 2} and turnover_estimate <=${minimum + interval * 2} THEN 1 END)`), `${minimum + interval * 2} - ${minimum + interval * 3} `],
    //         [Sequelize.literal(`COUNT(CASE WHEN turnover_estimate > ${minimum + interval * 3} and turnover_estimate <= ${minimum + interval * 3} THEN 1 END)`), `${minimum + interval * 3} - ${minimum + interval * 4} `],
    //         [Sequelize.literal(`COUNT(CASE WHEN turnover_estimate > ${minimum + interval * 4} and turnover_estimate <= ${minimum + interval * 4} THEN 1 END)`), `${minimum + interval * 4} - ${minimum + interval * 5} `],
    //         [Sequelize.literal(`COUNT(CASE WHEN turnover_estimate > ${minimum + interval * 5} and turnover_estimate <= ${minimum + interval * 5} THEN 1 END)`), `${minimum + interval * 5} - ${minimum + interval * 6} `],
    //         [Sequelize.literal(`COUNT(CASE WHEN turnover_estimate > ${minimum + interval * 6} THEN 1 END)`), `> ${minimum + interval * 6}`]

    //     ]

    // })

    return await model.companies.findAll({
        attributes:[
            'turnover_class_estimate',
            [Sequelize.fn('COUNT',Sequelize.col('turnover_class_estimate')),"number_of_companies"]
            
        ],
        group:['turnover_class_estimate']
    })
    
}
async function getCompaniesByAgeOfBusiness(data) {
    let max_size_estimate = await model.companies.findOne({
        attributes: [

            [Sequelize.literal('MAX(age_of_business)'), "max_size_estimate"]
        ],
        ...data
    })
    max_size_estimate = max_size_estimate ? max_size_estimate.dataValues.max_size_estimate : 0

    let interval = max_size_estimate / 6

    interval = floor(interval)

    return await model.companies.findAll({
        attributes: [
            [Sequelize.literal(`COUNT(CASE WHEN age_of_business = 0 THEN 1 END)`), "0"],
            [Sequelize.literal(`COUNT(CASE WHEN age_of_business > 0 and age_of_business <=${interval} THEN 1 END)`), `0 - ${interval}`],
            [Sequelize.literal(`COUNT(CASE WHEN age_of_business > ${interval} and age_of_business <=${interval * 2} THEN 1 END)`), `${interval} - ${interval * 2}`],
            [Sequelize.literal(`COUNT(CASE WHEN age_of_business > ${interval * 2} and age_of_business <= ${interval * 3} THEN 1 END)`), `${interval * 2} - ${interval * 3}`],
            [Sequelize.literal(`COUNT(CASE WHEN age_of_business > ${interval * 3} and age_of_business <= ${interval * 4} THEN 1 END)`), `${interval * 3} - ${interval * 4}`],
            [Sequelize.literal(`COUNT(CASE WHEN age_of_business > ${interval * 4} and age_of_business <= ${interval * 5} THEN 1 END)`), `${interval * 4} - ${interval * 5}`],
            [Sequelize.literal(`COUNT(CASE WHEN age_of_business > ${interval * 5} THEN 1 END)`), `> ${interval * 5}`]

        ]

    })
}



async function getCompaniesByStatus(data) {
    return await getCompanies({
        attributes: ["status", [Sequelize.fn('COUNT', 'status'), 'statusCount'], [Sequelize.literal('(count(*)  * 100.0 / SUM(COUNT(*))  OVER() )'), "percentage"]],
        group: "status",
        ...data
    })
}

async function getCompaniesByAccountCategory(data) {
    return await getCompanies({
        attributes: ["company_account_category", [Sequelize.fn('COUNT', 'company_account_category'), 'accountCategoryCount'], [Sequelize.literal('(count(*)  * 100.0 / SUM(COUNT(*))  OVER() )'), "percentage"]],
        group: "company_account_category",
        ...data
    })
}

async function getCompaniesByType(data) {
    return await getCompanies({
        attributes: ["type", [Sequelize.fn('COUNT', 'type'), 'typeCount'], [Sequelize.literal('(count(*)  * 100.0 / SUM(COUNT(*))  OVER() )'), "percentage"]],
        group: "type",
        ...data
    })
}

async function getCompaniesByExporter(data) {
    return await getCompanies({
        attributes: ["exporter", [Sequelize.fn('COUNT', 'exporter'), 'exporterCount'], [Sequelize.literal('(count(*)  * 100.0 / SUM(COUNT(*))  OVER() )'), "percentage"]],
        group: "exporter"
    })
}

async function getCompaniesByImporter(data) {
    return await getCompanies({
        attributes: ["importer", [Sequelize.fn('COUNT', 'importer'), 'importerCount'], [Sequelize.literal('(count(*)  * 100.0 / SUM(COUNT(*))  OVER() )'), "percentage"]],
        group: "importer"
    })
}

async function getCompaniesBySector(data) {
    return await getCompanies({
        attributes: ["main_sector", [Sequelize.fn('COUNT', 'main_sector'), 'sectorCount'], [Sequelize.literal('(count(*)  * 100.0 / SUM(COUNT(*))  OVER() )'), "percentage"]],
        group: "main_sector"
    })
}

async function getCompaniesBySICSection() {
    return await getCompanies({
        attributes: ["sic_section", [Sequelize.fn('COUNT', 'sic_section'), 'sectorCount'], [Sequelize.literal('(count(*)  * 100.0 / SUM(COUNT(*))  OVER() )'), "percentage"]],
        group: "sic_section"
    })
}

async function getCompaniesBySICDivision() {
    return await getCompanies({
        attributes: ["sic_division", [Sequelize.fn('COUNT', 'sic_division'), 'sectorCount'], [Sequelize.literal('(count(*)  * 100.0 / SUM(COUNT(*))  OVER() )'), "percentage"]],
        group: "sic_division"
    })
}

async function getCmpaniesBySICCode() {
    return getCompanies({
        attributes: ["sic_division", [Sequelize.fn('COUNT', 'sic_division'), 'sectorCount'], [Sequelize.literal('(count(*)  * 100.0 / SUM(COUNT(*))  OVER() )'), "percentage"]],
        group: "sic_division"
    })
}


async function getCompaniesByEquity(data) {
      
    return await model.dbf_financials_main.findOne({
        attributes: [
            [Sequelize.literal(`COUNT( distinct (case when ( ( value < -500000)   ) then chn  end))`), `Less than -500k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > -500000 and value <= -100000)   ) then chn  end))`),`-500k to -100k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > -100000 and value <= -10000)   ) then chn  end))`),`-100k to -10k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > -10000 and value <= 0 )  ) then chn  end))`),`-10k to 0`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value = null)   ) then chn  end))`),`null`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > 0 and value <= 10000)   ) then chn  end))`),`0 to 10k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > 10000 and value <= 100000)  ) then chn  end))`), `10k to 100k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > 100000 and value <= 500000)   ) then chn  end)) `), `100k to 500k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > 500000)   ) then chn  end))`), `Greator Than 500k`],
        ],
        where:{
            value_name:{
                [Op.or]:[`NetAssetsLiabilities`,'ShareholderFunds',`Equity`]
            }
        }


    })
}   
async function getCompaniesByGrossProfit(data) {
    

    return await model.dbf_financials_main.findOne({
        attributes: [
            [Sequelize.literal(`COUNT( distinct (case when ( ( value < -500000)   ) then chn  end))`), `Less than -500k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > -500000 and value <= -100000)   ) then chn  end))`),`-500k to -100k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > -100000 and value <= -10000)   ) then chn  end))`),`-100k to -10k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > -10000 and value <= 0 )  ) then chn  end))`),`-10k to 0`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value = null)   ) then chn  end))`),`null`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > 0 and value <= 10000)   ) then chn  end))`),`0 to 10k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > 10000 and value <= 100000)  ) then chn  end))`), `10k to 100k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > 100000 and value <= 500000)   ) then chn  end)) `), `100k to 500k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > 500000)   ) then chn  end))`), `Greator Than 500k`],
        ],
        where:{
            value_name:{
                [Op.or]:[`GrossProfitLoss:Consolidated`,'GrossProfitLoss']
            }
        }


    })
}
async function getCompaniesByProfitAndLoss(data) {
  
    return await model.dbf_financials_main.findOne({
        attributes: [
            [Sequelize.literal(`COUNT( distinct (case when ( ( value < -500000)   ) then chn  end))`), `Less than -500k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > -500000 and value <= -100000)   ) then chn  end))`),`-500k to -100k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > -100000 and value <= -10000)   ) then chn  end))`),`-100k to -10k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > -10000 and value <= 0 )  ) then chn  end))`),`-10k to 0`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value = null)   ) then chn  end))`),`null`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > 0 and value <= 10000)   ) then chn  end))`),`0 to 10k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > 10000 and value <= 100000)  ) then chn  end))`), `10k to 100k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > 100000 and value <= 500000)   ) then chn  end)) `), `100k to 500k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > 500000)   ) then chn  end))`), `Greator Than 500k`],
        ],
        where:{
            value_name:{
                [Op.or]:[`ProfitLoss`,'ProfitLoss:Consolidated']
            }
        }


    })
}

async function getCompaniesByTurnoverFinacial(data) {
  
    return await model.dbf_financials_main.findOne({
        attributes: [
            [Sequelize.literal(`COUNT( distinct (case when ( ( value < -500000)   ) then chn  end))`), `Less than -500k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > -500000 and value <= -100000)   ) then chn  end))`),`-500k to -100k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > -100000 and value <= -10000)   ) then chn  end))`),`-100k to -10k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > -10000 and value <= 0 )  ) then chn  end))`),`-10k to 0`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value = null)   ) then chn  end))`),`null`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > 0 and value <= 10000)   ) then chn  end))`),`0 to 10k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > 10000 and value <= 100000)  ) then chn  end))`), `10k to 100k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > 100000 and value <= 500000)   ) then chn  end)) `), `100k to 500k`],
            [Sequelize.literal(`COUNT( distinct (case when ( (value > 500000)   ) then chn  end))`), `Greator Than 500k`],
        ],
        where:{
            value_name:{
                [Op.or]:[`TotalAssetsLessCurrentLiabilities`,'TotalAssetsLessCurrentLiabilities:Consolidated']
            }
        }


    })
}

async function getCompaniesByCounty(data){
    return await model.companies.findAll({
        group:["county"],
        attributes:[
            "county",
            "country",
            [Sequelize.fn("COUNT",Sequelize.col("county")),"number_of_companies"]
        ]
    });
}

async function getCompaniesByRegion(data){
    return await model.company_location_gen.findAll({
        group:["address_region"],
        attributes:[
            "address_region",
            [Sequelize.fn("COUNT",Sequelize.col("address_region")),"number_of_companies"]
        ],
        where:{
            address_type : "Registered Address"
        }
    });
}

    
module.exports = {
    getCompanies,
    getCompaniesOfficial,
    getCompaniesByEmployeeSize,
    getCompaniesByAgeOfBusiness,
    getCompaniesByTurnover,
    getCompaniesByStatus,
    getCompaniesByAccountCategory,
    getCompaniesByType,
    getCompaniesByExporter,
    getCompaniesByImporter,
    getCompaniesBySector,
    getCompaniesBySICSection,
    getCompaniesBySICDivision,
    getCmpaniesBySICCode,
    getCompaniesByEquity,
    getCompaniesByGrossProfit,
    getCompaniesByProfitAndLoss,
    getCompaniesByRegion,
    getCompaniesByTurnoverFinacial,
    getCompaniesByCounty
}