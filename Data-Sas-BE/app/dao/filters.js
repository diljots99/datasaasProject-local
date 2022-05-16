const model = require("../../models");

async function getAllBusinessSearchFilters(data) {
  return await model.available_business_filters.findAll({
    attributes: ["uuid", "name", "category", "type"],
    ...data,
  });
}

async function getFilterById(filterId) {
  return await model.available_business_filters.findOne({
    where: {
      uuid: filterId,
    },
  });
}

async function getCompanies(data) {
  // const options = {
  //     page: 1, // Default 1
  //     paginate: 25, // Default 25
  //   }
  const result = await model.compines_offical.paginate(data);
  return result;
}

async function getDistinctCompanyAccountCategory() {
  return await model.companies.findAll({
    attributes: ["company_account_category"],
    group: ["company_account_category"],
  });
  
}
async function getDistinctCompanyPostCode() {
  return await model.company_location_gen.findAll({
    attributes: ["address_post_code_trim"],
    group: ["address_post_code_trim"],
  });
  
}

async function getDistinctCompanyCity() {
  return await model.company_location_gen.findAll({
    attributes: ["address_town"],
    group: ["address_town"],
  });
  
}
async function getDistinctCompanyCounty() {
  return await model.company_location_gen.findAll({
    attributes: ["address_county_province"],
    group: ["address_county_province"],
  });
  
}
async function getDistinctCompanyRegion() {
  return await model.company_location_gen.findAll({
    attributes: ["address_region"],
    group: ["address_region"],
  });
}

async function getDistinctCompanyCountry() {
  return await model.company_location_gen.findAll({
    attributes: ["company_address_country","personal_address_country"],
    group: ["company_address_country","personal_address_country"],
  });
}


module.exports = {
  getAllBusinessSearchFilters,
  getFilterById,
  getCompanies,
  getDistinctCompanyAccountCategory,
  getDistinctCompanyPostCode,
  getDistinctCompanyCity,
  getDistinctCompanyCounty,
  getDistinctCompanyRegion,
  getDistinctCompanyCountry
};
