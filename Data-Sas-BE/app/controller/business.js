const { v4: uuidv4 } = require("uuid");
const helper = require("../helper/validator");
const dao = require("../dao/business");
const errorlog = require("../../utils/logger").errorlog;
const successlog = require("../../utils/logger").successlog;
const messages = require("../../utils/messages");
const { Op,Sequelize } = require("sequelize");
const model = require("../../models");
async function businessSearch(req, res) {
  let { page, items_per_page, filterData } = req.body;

  page = page ? page : 1;
  items_per_page = items_per_page ? items_per_page : 25;
  let where = {};
  let otherOptions = {};
  if (filterData) {
    filterData.forEach((chipData) => {
      if (chipData.chip_group == "Company Number") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push({ chn: `${chip_value.chip_value}` });
        });
        where = {
          [Op.or]: list_ofChipData,
          ...where,
        };
      }

      if (chipData.chip_group == "Company Name") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push(`%${chip_value.chip_value}%`);
        });
        where = {
          company_name: {
            [Op.like]: list_ofChipData[0],
          },
          ...where,
        };
      }

      if (chipData.chip_group == "Website") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push(`%${chip_value.chip_value}%`);
        });

        const arr = {
          model: model.companies,
          where: {
            website_url_1: {
              [Op.like]: list_ofChipData[0],
            },
          },
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }

      if (chipData.chip_group == "Mail") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push(`%${chip_value.chip_value}%`);
        });

        const arr = {
          model: model.companies,
          where: {
            email1: {
              [Op.like]: list_ofChipData[0],
            },
          },
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }

      if (chipData.chip_group == "Telephone") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push(`%${chip_value.chip_value}%`);
        });

        const arr = {
          model: model.companies,
          where: {
            phone1: {
              [Op.like]: list_ofChipData[0],
            },
          },
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }
      
      if (chipData.chip_group == "Company Account Category") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push({company_account_category: `${chip_value.chip_value}`});
        });

        const arr = {
          model: model.companies,
          where: {
            [Op.or]: list_ofChipData
          },
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }
      

    });
  }
  const options = {
    attributes: { exclude: ["id"] },
    page: page ? page : 1,
    paginate: items_per_page ? items_per_page : 1,
    where: where,
    ...otherOptions,
  };
  let result = await dao.getCompaniesWithFilters(options);

  if (result.docs.length < items_per_page) {
    result.total = result.docs.length;
    result.pages = 1;
  }
  res.send({
    page: options.page,
    items_per_page: options.paginate,
    total: result.total,
    pages: result.pages,
    result: result.docs,
  });
}

async function businessPeople(req, res) {
  let page = req.query.page ? parseInt(req.query.page) : 1;
  let item_per_page = req.query.item_per_page
    ? parseInt(req.query.item_per_page)
    : 25;
  let uuid = req.params.uuid;
  if (!uuid) {
    return res.send({
      status: false,
      message: "uuid is important",
    });
  }

  let company = await dao.getCompanyOfficalByUuid({
    where: {
      uuid: uuid,
    },
  });

  let no_of_directors = await dao.getNumberOfDirectorsCompanies({
    where: {
      chn: company.dataValues.chn,
    },
  });

  let officers = await dao.getOfficersForCompany({
    page: page,
    paginate: item_per_page,
    where: {
      chn: company.dataValues.chn,
    },
    attributes: [
      "uuid",
      "title",
      "fullname",
      "firstname",
      "middlename",
      "lastname",
      "title",
      "officer_role",
    ],
  });

  return res.send({
    status: true,
    page: page,
    item_per_page: item_per_page,
    pages: officers.pages,
    total: officers.total,
    no_of_directors: no_of_directors,
    no_of_employess: no_of_directors,

    result: officers.docs,
  });
}

async function businessDirectors(req, res) {
  let page = req.query.page ? parseInt(req.query.page) : 1;
  let item_per_page = req.query.item_per_page
    ? parseInt(req.query.item_per_page)
    : 25;
  let uuid = req.params.uuid;
  if (!uuid) {
    return res.send({
      status: false,
      message: "uuid is important",
    });
  }
  let company = await dao.getCompanyOfficalByUuid({
    where: {
      uuid: uuid,
    },
  });
  let no_of_directors = await dao.getNumberOfDirectorsCompanies({
    where: {
      chn: company.dataValues.chn,
      officer_role: {
        [Op.like]: "%director%",
      },
    },
  });
  let no_of_secretary = await dao.getNumberOfDirectorsCompanies({
    where: {
      chn: company.dataValues.chn,
      officer_role: {
        [Op.like]: "%secretary%",
      },
    },
  });
  let no_of_active_directors = await dao.getNumberOfDirectorsCompanies({
    where: {
      chn: company.dataValues.chn,
      resigned_on: null,
    },
  });
  let no_of_resigned_directors = await dao.getNumberOfDirectorsCompanies({
    where: {
      chn: company.dataValues.chn,
      resigned_on: {
        [Op.ne]: null,
      },
    },
  });
  let officers = await dao.getOfficersForCompany({
    page: page,
    paginate: item_per_page,
    where: {
      chn: company.dataValues.chn,
    },
    attributes: { exclude: ["id"] },
  });
  return res.send({
    status: true,
    page: page,
    item_per_page: item_per_page,
    pages: officers.pages,
    total: officers.total,
    no_of_directors: no_of_directors,
    no_of_secretary: no_of_secretary,
    no_of_active_directors: no_of_active_directors,
    no_of_inactive: 0,
    no_of_resigned_directors: no_of_resigned_directors,

    result: officers.docs,
  });
}

async function businessTrade(req, res) {
  let page = req.query.page ? parseInt(req.query.page) : 1;
  let item_per_page = req.query.item_per_page
    ? parseInt(req.query.item_per_page)
    : 25;
  let uuid = req.params.uuid;
  if (!uuid) {
    return res.send({
      status: false,
      message: "uuid is important",
    });
  }
  let company_offical = await dao.getCompanyOfficalByUuid({
    where: {
      uuid: uuid,
    },
  });

  let company = await dao.getCompany({
    where: {
      chn: company_offical.dataValues.chn,
    },
  });

  let hmrcExportsOpreationsYearly = await dao.getHmrcExport(
    {
      attributes: [
        [Sequelize.literal(`YEAR(hmrc_date2)`), "year"],
        [Sequelize.literal(`COUNT(*)`), "num_of_opreations"],
      ],
      group: [ Sequelize.fn('YEAR', Sequelize.col('hmrc_date2'))],
      order: [
        [Sequelize.literal(`YEAR(hmrc_date2)`), 'DESC'],
    ],
      where: {
        chn: company_offical.dataValues.chn,
      },
    }
   
  );
  let hmrcExportsOpreationsMonthly = await dao.getHmrcExport(
    {
      attributes: [
        [Sequelize.literal(`YEAR(hmrc_date2)`), "year"],
        [Sequelize.literal(`MONTH(hmrc_date2)`), "month"],
        [Sequelize.literal(`COUNT(*)`), "num_of_opreations"],
      ],
      group: [ Sequelize.col('hmrc_date')],
      order: [
        [Sequelize.literal(`YEAR(hmrc_date2)`), 'DESC'],
        [Sequelize.literal(`MONTH(hmrc_date2)`), 'DESC'],
    ],
      where: {
        chn: company_offical.dataValues.chn,
      },
    }
   
  );
  let hmrcImportOpreationsYearly = await dao.getHmrcImport(
    {
      attributes: [
        [Sequelize.literal(`YEAR(hmrc_date2)`), "year"],
        [Sequelize.literal(`COUNT(*)`), "num_of_opreations"],
      ],
      group: [ Sequelize.fn('YEAR', Sequelize.col('hmrc_date2'))],
      order: [
        [Sequelize.literal(`YEAR(hmrc_date2)`), 'DESC'],
    ],
      where: {
        chn: company_offical.dataValues.chn,
      },
    }
   
  );
  
  let hmrcImportOpreationsMonthly = await dao.getHmrcImport(
    {
      attributes: [
        [Sequelize.literal(`YEAR(hmrc_date2)`), "year"],
        [Sequelize.literal(`MONTH(hmrc_date2)`), "month"],
        [Sequelize.literal(`COUNT(*)`), "num_of_opreations"],
      ],
      group: [ Sequelize.col('hmrc_date')],
      order: [
        [Sequelize.literal(`YEAR(hmrc_date2)`), 'DESC'],
        [Sequelize.literal(`MONTH(hmrc_date2)`), 'DESC'],
    ],
      where: {
        chn: company_offical.dataValues.chn,
      },
    }
   
  );

  let hmrcCode  


  return res.send({
    status: true,
    result: {
      trade: {
        uk_sic_section: company.dataValues.sic_section,
        uk_sic: company.dataValues.uk_sic_2007_code,
        us_sic: null,
        nace: company.dataValues.nace_rev_2_code,
        naics: company.dataValues.naics_2017_code,
        subsector: company.dataValues.main_subsector,
        sector: company.dataValues.main_sector,
        exporter_status: company.dataValues.exporter,
        export_probability: company.dataValues.export_probability,
        importer_status: company.dataValues.importer,
        monthly_opreations: {
          exports: hmrcExportsOpreationsMonthly,
          imports: hmrcImportOpreationsMonthly
        },
        yearly_opreations: {
          exports:  hmrcExportsOpreationsYearly,
          imports: hmrcImportOpreationsYearly
        },
        hmrc_code_description:{
          exports: [{hmrc_code:"8885556" , code_description: ""}],
          imports: [{hmrc_code:"8885556" , code_description: ""}],
        }
      },

    },
  });
}

async function businessTradeAddress(req, res) {
  let page = req.query.page ? parseInt(req.query.page) : 1;
  let item_per_page = req.query.item_per_page
    ? parseInt(req.query.item_per_page)
    : 25;
  let uuid = req.params.uuid;
  if (!uuid) {
    return res.send({
      status: false,
      message: "uuid is important",
    });
  }
  let company_offical = await dao.getCompanyOfficalByUuid({
    where: {
      uuid: uuid,
    },
  });

  let company = await dao.getCompany({
    where: {
      chn: company_offical.dataValues.chn,
    },
  });
  let company_postcodes = await dao.getAllCompanyPostCodes({
    page: page,
    paginate: item_per_page,
    where: {
      chn: company_offical.dataValues.chn,
    },
  });

  return res.send({
    status: true,
    page: page,
    item_per_page: item_per_page,
    total: company_postcodes.total,
    pages: company_postcodes.pages,

    result: company_postcodes.docs,
  });
}

module.exports = {
  businessSearch,
  businessPeople,
  businessDirectors,
  businessTrade,
  businessTradeAddress,
};
