const model = require("../../models");
const { Op } = require("sequelize");

async function getCompanies(data) {
  // const options = {
  //     page: 1, // Default 1
  //     paginate: 25, // Default 25
  //   }
  const result = await model.compines_offical.paginate(data);
  return result;
}

async function getCompaniesWithFilters(data) {
  // const options = {
  //     page: 1, // Default 1
  //     paginate: 25, // Default 25
  //   }
  const result = await model.compines_offical.paginate({
    include: [
      { model: model.companies, required: false, where: { chn: "02723534" }, },
    ],
    // ...data,
  });
  return result;
}

async function getCompanyOfficalByUuid(data) {
  return model.compines_offical.findOne(data);
}

async function getCompany(data) {
  return model.companies.findOne(data);
}

async function getNumberOfDirectorsCompanies(data) {
  return model.officer.count(data);
}
async function getNumberOfEmployeesCompanies(data) {}
async function getOfficersForCompany(data) {
  return await model.officer.paginate(data);
}

async function getAllCompanyPostCodes(data) {
  return await model.company_postcodes.paginate(data);
}

async function getHmrcExport(data){
  return model.dba_hmrc_export_gen.findAll(data);
}

async function getHmrcImport(data){
  return model.dba_hmrc_import_gen.findAll(data);
}

module.exports = {
  getCompanyOfficalByUuid,
  getCompanies,
  getNumberOfDirectorsCompanies,
  getNumberOfEmployeesCompanies,
  getOfficersForCompany,
  getAllCompanyPostCodes,
  getCompany,
  getCompaniesWithFilters,
  getHmrcExport,
  getHmrcImport
};
