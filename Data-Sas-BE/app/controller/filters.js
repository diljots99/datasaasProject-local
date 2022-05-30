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
    if (
      element.name == "Company Category" &&
      element.category == "Status"
    ) {
      const distinct = await dao.getDistinctCompanyCategory();
      listOfSuggestion = [];
      for (let category of distinct) {
        category = category.toJSON();
        if (category.company_category) {
          listOfSuggestion.push(category.company_category);
        }

      }
      options = {
        suggestions: listOfSuggestion,
        ...options,
      };
    }
    if (
      element.name == "UK SIC Section" 
    ) {
      const distinct = await dao.getDistinctUKSICSection();
      listOfSuggestion = [];
      for (let category of distinct) {
        category = category.toJSON();
        if (category.sic_section) {
          listOfSuggestion.push(category.sic_section);
        }

      }
      options = {
        suggestions: listOfSuggestion,
        ...options,
      };
    }
    if (
      element.name == "SubSector" 
    ) {
      const distinct = await dao.getDistinctCompanySubSector();
      listOfSuggestion = [];
      for (let category of distinct) {
        category = category.toJSON();
        if (category.main_subsector) {
          listOfSuggestion.push(category.main_subsector);
        }

      }
      options = {
        suggestions: listOfSuggestion,
        ...options,
      };
    }
    if (
      element.name == "Sector" 
    ) {
      const distinct = await dao.getDistinctCompanySector();
      listOfSuggestion = [];
      for (let category of distinct) {
        category = category.toJSON();
        if (category.main_sector) {
          listOfSuggestion.push(category.main_sector);
        }

      }
      options = {
        suggestions: listOfSuggestion,
        ...options,
      };
    }
    if (
      element.name == "NAICS" 
    ) {
      const distinct = await dao.getDistinctCompanyNAICS();
      listOfSuggestion = [];
      for (let category of distinct) {
        category = category.toJSON();
        if (category.naics_2017_code) {
          listOfSuggestion.push(category.naics_2017_code);
        }

      }
      options = {
        suggestions: listOfSuggestion,
        ...options,
      };
    }
    if (
      element.name == "UK SIC" 
    ) {
      const distinct = await dao.getDistinctCompanyUKSIC();
      listOfSuggestion = [];
      for (let category of distinct) {
        category = category.toJSON();
        if (category.naics_2017_code) {
          listOfSuggestion.push(category.naics_2017_code);
        }

      }
      options = {
        suggestions: listOfSuggestion,
        ...options,
      };
    }
    
    if (
      element.name == "NACE" 
    ) {
      const distinct = await dao.getDistinctCompanyNACE();
      listOfSuggestion = [];
      for (let category of distinct) {
        category = category.toJSON();
        if (category.nace_rev_2_code) {
          listOfSuggestion.push(category.nace_rev_2_code);
        }

      }
      options = {
        suggestions: listOfSuggestion,
        ...options,
      };
    }
    
    if (
      element.name == "Director Role" 
    ) {
      const distinct = await dao.getDistinctOfficer_Role();
      listOfSuggestion = [];
      for (let category of distinct) {
        category = category.toJSON();
        if (category.officer_role) {
          listOfSuggestion.push(category.officer_role);
        }

      }
      options = {
        suggestions: listOfSuggestion,
        ...options,
      };
    }
    
    if (
      element.name == "Director Occupation" 
    ) {
      const distinct = await dao.getDistinctOfficerOccupation();
      listOfSuggestion = [];
      for (let category of distinct) {
        category = category.toJSON();
        if (category.occupation) {
          listOfSuggestion.push(category.occupation);
        }

      }
      options = {
        suggestions: listOfSuggestion,
        ...options,
      };
    }
    
    if (
      element.name == "Director Nationality" 
    ) {
      const distinct = await dao.getDistinctOfficerNationality();
      listOfSuggestion = [];
      for (let category of distinct) {
        category = category.toJSON();
        if (category.nationality) {
          listOfSuggestion.push(category.nationality);
        }

      }
      options = {
        suggestions: listOfSuggestion,
        ...options,
      };
    }
    
    if (
      element.name == "Director Country of Residence" 
    ) {
      const distinct = await dao.getDistinctOfficerCountryOfResidence();
      listOfSuggestion = [];
      for (let category of distinct) {
        category = category.toJSON();
        if (category.country_of_residence) {
          listOfSuggestion.push(category.country_of_residence);
        }

      }
      options = {
        suggestions: listOfSuggestion,
        ...options,
      };
    }
    if (
      element.name == "Ownership Kind" 
    ) {
      const distinct = await dao.getDistinctPSCKIND();
      listOfSuggestion = [];
      for (let category of distinct) {
        category = category.toJSON();
        if (category.kind) {
          listOfSuggestion.push(category.kind);
        }

      }
      options = {
        suggestions: listOfSuggestion,
        ...options,
      };
    }
    
    if (
      element.name == "Ownership Nationality" 
    ) {
      const distinct = await dao.getDistinctPSCNationality();
      listOfSuggestion = [];
      for (let category of distinct) {
        category = category.toJSON();
        if (category.nationality) {
          listOfSuggestion.push(category.nationality);
        }

      }
      options = {
        suggestions: listOfSuggestion,
        ...options,
      };
    }
    
    if (
      element.name == "Ownership Country of Residence" 
    ) {
      const distinct = await dao.getDistinctPSCCountryOfResidence();
      listOfSuggestion = [];
      for (let category of distinct) {
        category = category.toJSON();
        if (category.country_of_residence) {
          listOfSuggestion.push(category.country_of_residence);
        }

      }
      options = {
        suggestions: listOfSuggestion,
        ...options,
      };
    }
    
    working_filters =new Set( ["Ownership Country of Residence","Ownership Nationality","Ownership Kind","Company Name" , "Company Number" , "Website" , "Telephone" , "Mail" , "Company Account Category" , "Post Code", "City" , "County" , "Region" , "Country" , "Status","Incorporation date","Dissolution Date","Company Category","Last Accounts Date","UK SIC Section","SubSector","Sector","NAICS","UK SIC","NACE","Current Assets", "Director Name" , "Director Role" , "Director Occupation" , "Director Nationality" , "Director Country of Residence" , "Director Resign Date" , "Director Appointment Date" ])
    
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
