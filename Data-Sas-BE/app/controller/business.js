const { v4: uuidv4 } = require("uuid");
const helper = require("../helper/validator");
const dao = require("../dao/business");
const errorlog = require("../../utils/logger").errorlog;
const successlog = require("../../utils/logger").successlog;
const messages = require("../../utils/messages");
const { Op } = require("sequelize");

async function businessSearch(req, res) {
  let { page, items_per_page } = req.body;

  const options = {
    page: page ? page : 1,
    paginate: items_per_page ? items_per_page : 25,
  };
  let result = await dao.getCompanies(options);
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
    where:{
      chn : company_offical.dataValues.chn
    }
  })
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
        export_probability:company.dataValues.export_probability,
        importer_status: company.dataValues.importer,
      },
      import_export: [{}],
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
    where:{
      chn : company_offical.dataValues.chn
    }
  })
  let company_postcodes = await dao.getAllCompanyPostCodes({
    page:page,
    paginate:item_per_page,
    where:{
      chn:company_offical.dataValues.chn
    }
  })

  return res.send({
    status:true,
    page:page,
    item_per_page:item_per_page,
    total:company_postcodes.total,
    pages:company_postcodes.pages,

    result: company_postcodes.docs,

  })
}


module.exports = {
  businessSearch,
  businessPeople,
  businessDirectors,
  businessTrade,
  businessTradeAddress
};
