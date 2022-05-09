const model = require("../../models");


async function getCompanies(data){
    // const options = {
    //     page: 1, // Default 1
    //     paginate: 25, // Default 25
    //   }
      const result = await  model.compines_offical.paginate(data)
      return result
}

module.exports ={

    getCompanies
}