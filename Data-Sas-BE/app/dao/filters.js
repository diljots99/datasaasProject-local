const model = require("../../models");

async function getAllBusinessSearchFilters(data) {
  return await model.available_business_filters.findAll({
    attributes: ["uuid", "name", "category", "type"],
    ...data,
  });
}

async function getAllInsightsSearchFilters(data) {
  return await model.available_insights_filters.findAll({
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
    attributes: ["company_address_country", "personal_address_country"],
    group: ["company_address_country", "personal_address_country"],
  });
}

async function getDistinctCompanyStatus() {
  return await model.compines_offical.findAll({
    attributes: ["company_status"],
    group: ["company_status"],
  });
}
async function getDistinctCompanyType() {
  return await model.companies.findAll({
    attributes: ["type"],
    group: ["type"],
  });
}

async function getDistinctCompanySizeClassEstimate() {
  return await model.companies.findAll({
    attributes: ["size_class_estimate"],
    group: ["size_class_estimate"],
  });
}
async function getDistinctCompanyByAge() {
  return await model.companies.findAll({
    attributes: ["age_of_business"],
    group: ["age_of_business"],
  });
}
async function getDistinctInsightsCompanyByCounty() {
  return await model.companies.findAll({
    attributes: ["county"],
    group: ["county"],
  });
}
async function getDistinctInsightsCompanyByRegion() {
  return await model.companies.findAll({
    attributes: ["region"],
    group: ["region"],
  });
}

async function getDistinctCompanyTurnoverClassEstimate() {
  return await model.companies.findAll({
    attributes: ["turnover_class_estimate"],
    group: ["turnover_class_estimate"],
  });
}

async function getDistinctCompanyCategory() {
  return await model.compines_offical.findAll({
    attributes: ["company_category"],
    group: ["company_category"],
  });
}

async function getDistinctUKSICSection() {
  return await model.companies.findAll({
    attributes: ["sic_section"],
    group: ["sic_section"],
  });
}
async function getDistinctCompanySubSector() {
  return await model.companies.findAll({
    attributes: ["main_subsector"],
    group: ["main_subsector"],
  });
}
async function getDistinctCompanySector() {
  return await model.companies.findAll({
    attributes: ["main_sector"],
    group: ["main_sector"],
  });
}
async function getDistinctCompanyNAICS() {
  return await model.companies.findAll({
    attributes: ["naics_2017_code"],
    group: ["naics_2017_code"],
  });
}
async function getDistinctCompanyUKSIC() {
  return await model.companies.findAll({
    attributes: ["uk_sic_2007_code"],
    group: ["uk_sic_2007_code"],
  });
}

async function getDistinctCompanyNACE() {
  return await model.companies.findAll({
    attributes: ["nace_rev_2_code"],
    group: ["nace_rev_2_code"],
  });
}
async function getDistinctOfficer_Role() {
  return await model.officer.findAll({
    attributes: ["officer_role"],
    group: ["officer_role"],
  });
}
async function getDistinctOfficerOccupation() {
  return await model.officer.findAll({
    attributes: ["occupation"],
    group: ["occupation"],
  });
}
async function getDistinctOfficerNationality() {
  return await model.officer.findAll({
    attributes: ["nationality"],
    group: ["nationality"],
  });
}
async function getDistinctOfficerCountryOfResidence() {
  return await model.officer.findAll({
    attributes: ["country_of_residence"],
    group: ["country_of_residence"],
  });
}
async function getDistinctPSCKIND() {
  return await model.dbp_psc_gen.findAll({
    attributes: ["kind"],
    group: ["kind"],
  });
}
async function getDistinctPSCNationality() {
  return await model.dbp_psc_gen.findAll({
    attributes: ["nationality"],
    group: ["nationality"],
  });
}

async function getDistinctPSCCountryOfResidence() {
  return await model.dbp_psc_gen.findAll({
    attributes: ["country_of_residence"],
    group: ["country_of_residence"],
  });
}

async function getDistinctPSCCountryOfResidence() {
  return await model.dbp_psc_gen.findAll({
    attributes: ["country_of_residence"],
    group: ["country_of_residence"],
  });
}

async function getDistinctExporter() {
  return await model.companies.findAll({
    attributes: ["exporter"],
    group: ["exporter"],
  });
}

async function getDistinctImporter() {
  return await model.companies.findAll({
    attributes: ["importer"],
    group: ["importer"],
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
  getDistinctCompanyCountry,
  getDistinctCompanyStatus,
  getDistinctCompanyCategory,
  getDistinctUKSICSection,
  getDistinctCompanySubSector,
  getDistinctCompanySector,
  getDistinctCompanyNAICS,
  getDistinctCompanyUKSIC,
  getDistinctCompanyNACE,
  getDistinctOfficer_Role,
  getDistinctOfficerOccupation,
  getDistinctOfficerNationality,
  getDistinctOfficerCountryOfResidence,
  getDistinctPSCKIND,
  getDistinctPSCNationality,
  getDistinctPSCCountryOfResidence,
  getDistinctExporter,
  getDistinctImporter,
  getAllInsightsSearchFilters,
  getDistinctCompanySizeClassEstimate,
  getDistinctCompanyTurnoverClassEstimate,
  getDistinctCompanyByAge,
  getDistinctInsightsCompanyByCounty,
  getDistinctInsightsCompanyByRegion,
  getDistinctCompanyType
};
