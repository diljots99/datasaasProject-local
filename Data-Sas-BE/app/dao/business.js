const model = require("../../models");


async function getCompanies(data){
    // const options = {
    //     page: 1, // Default 1
    //     paginate: 25, // Default 25
    //   }
      const result = await  model.compines_offical.paginate(data)
      return result
}

async function getCompanyOfficalByUuid(data){
    return model.compines_offical.findOne(data)
}

async function getCompanyByUuid(){
}


async function getNumberOfDirectorsCompanies(data){
    return model.officer.count(data)
}
async function getNumberOfEmployeesCompanies(data){
    
}
async function getOfficersForCompany(data){
    return await  model.officer.paginate(data)
      
}

module.exports ={
    getCompanyOfficalByUuid,
    getCompanies,
    getNumberOfDirectorsCompanies,
    getNumberOfEmployeesCompanies,
    getOfficersForCompany
}