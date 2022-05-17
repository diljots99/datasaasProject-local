const CryptoJS = require("crypto-js");
const { v4: uuidv4 } = require("uuid");
const crptoKey = "secret_key_123";
const accessTokenSecret = "my_secrect_key";
const jwt = require("jsonwebtoken");
const helper = require("../helper/validator");
const dao = require("../dao/filters");
const errorlog = require("../../utils/logger").errorlog;
const successlog = require("../../utils/logger").successlog;
const messages = require("../../utils/messages");
const e = require("express");

async function listAllFilters(req, res) {
  const list = await dao.getAllBusinessSearchFilters();
  const listFinal = [];
  for (let element of list) {
    let options = {};
    element = element.toJSON();
    if (
      element.name == "Company Account Category" &&
      element.category == "Company"
    ) {
      const distinctAccountCategory =
        await dao.getDistinctCompanyAccountCategory();
      listOfSuggestion = [];
      for (let category of distinctAccountCategory) {
        category = category.toJSON();
        listOfSuggestion.push(category.company_account_category);
      }
      options = {
        suggestions: listOfSuggestion,
        ...options,
      };
    }
    if (element.name == "Post Code") {
      const distinct = await dao.getDistinctCompanyPostCode();
      listOfSuggestion = [];
      for (let category of distinct) {
        category = category.toJSON();
        if (category.address_post_code_trim) {
          listOfSuggestion.push(...category.address_post_code_trim.split(";"));
        }
      }
      options = {
        suggestions: listOfSuggestion,
        ...options,
      };
    }

    if (element.name == "City") {
      const distinct = await dao.getDistinctCompanyCity();
      listOfSuggestion = [];
      for (let category of distinct) {
        category = category.toJSON();
        if (category.address_town) {
          listOfSuggestion.push(category.address_town);
        }
      }
      options = {
        suggestions: listOfSuggestion,
        ...options,
      };
    }

    if (element.name == "County") {
      const distinct = await dao.getDistinctCompanyCounty();
      listOfSuggestion = [];
      for (let category of distinct) {
        category = category.toJSON();
        if (category.address_county_province) {
          listOfSuggestion.push(category.address_county_province);
        }
      }
      options = {
        suggestions: listOfSuggestion,
        ...options,
      };
    }

    if (element.name == "Region") {
      const distinct = await dao.getDistinctCompanyRegion();
      listOfSuggestion = [];
      for (let category of distinct) {
        category = category.toJSON();
        if (category.address_region) {
          listOfSuggestion.push(category.address_region);
        }
      }
      options = {
        suggestions: listOfSuggestion,
        ...options,
      };
    }

    if (element.name == "Country") {
      const distinct = await dao.getDistinctCompanyCountry();
      listOfSuggestion = [];
      for (let category of distinct) {
        category = category.toJSON();
        if (category.personal_address_country) {
          listOfSuggestion.push(category.personal_address_country);
        }
        if (category.company_address_country) {
          listOfSuggestion.push(category.company_address_country);
        }
      }
      options = {
        suggestions: listOfSuggestion,
        ...options,
      };
    }
    if (
      element.name == "Status" &&
      element.category == "Status"
    ) {
      const distinct = await dao.getDistinctCompanyStatus();
      listOfSuggestion = [];
      for (let category of distinct) {
        category = category.toJSON();
        if (category.company_status) {
          listOfSuggestion.push(category.company_status);
        }

      }
      options = {
        suggestions: listOfSuggestion,
        ...options,
      };
    }
    working_filters =new Set( ["Company Name" , "Company Number" , "Website" , "Telephone" , "Mail" , "Company Account Category" , "Post Code", "City" , "County" , "Region" , "Country" , "Status"])
    
    listFinal.push({
      featureEnabled: working_filters.has( element.name),
      ...element,
      ...options,
    });
  }
  res.send({ status: "true", result: listFinal });
}

async function filterSuggestions(req, res) {
  const filterId = req.params.uuid;
  const { page, paginate } = req.body;
  const filter = await dao.getFilterById(filterId);
  if (filter.dataValues.name == "Company Name") {
    const options = {
      attributes: { exclude: ["id"] },
      page: page ? page : 1,
      paginate: paginate ? paginate : 10,
    };
    const result = await dao.getCompanies(options);
    return res.send({
      status: "true",
      page: options.page,
      total_pages: result.pages,
      total: result.total,
      result: result.docs,
    });
  }

  return res.send({ status: false });
}

module.exports = {
  listAllFilters,
  filterSuggestions,
};
