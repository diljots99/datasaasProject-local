const model = require("../../models");


async function getAllBusinessSearchFilters(data){
    return await model.available_business_filters.findAll({
        attributes: ['uuid', 'name','category','type'],
        ...data
    });
}

async function getFilterById(filterId){
    return await model.available_business_filters.findOne({
        where:{
            uuid: filterId
        }
    });
}

async function getCompanies(data){
    // const options = {
    //     page: 1, // Default 1
    //     paginate: 25, // Default 25
    //   }
      const result = await  model.compines_offical.paginate(data)
      return result
}
module.exports ={
    getAllBusinessSearchFilters,
    getFilterById,
    getCompanies
}