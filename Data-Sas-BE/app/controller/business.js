const { v4: uuidv4 } = require("uuid");
const helper = require("../helper/validator");
const dao = require("../dao/business");
const errorlog = require("../../utils/logger").errorlog;
const successlog = require("../../utils/logger").successlog;
const messages = require("../../utils/messages");
const { Op, Sequelize } = require("sequelize");
const model = require("../../models");
const { stringToDate } = require("../comman/dates")

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

          list_ofChipData.push({
            company_name: {
              [Op.like]: `%${chip_value.chip_value}%`
            }
          });
        });
        where = {
          [Op.or]: list_ofChipData,
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
          list_ofChipData.push({
            company_account_category: `${chip_value.chip_value}`,
          });
        });

        const arr = {
          model: model.companies,
          where: {
            [Op.or]: list_ofChipData,
          },
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }

      if (chipData.chip_group == "Post Code") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {

          list_ofChipData.push({
            address_post_code_trim: {
              [Op.like]: `%${chip_value.chip_value}%`,
            },
          });

        });

        const arr = {
          model: model.company_location_gen,
          where: {
            [Op.or]: list_ofChipData,
          },
        };

        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }

      if (chipData.chip_group == "City") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {

          list_ofChipData.push({
            address_town: {
              [Op.like]: `%${chip_value.chip_value}%`,
            },
          });

        });

        const arr = {
          model: model.company_location_gen,
          where: {
            [Op.or]: list_ofChipData,
          },
        };

        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }
      if (chipData.chip_group == "County") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {

          list_ofChipData.push({
            address_county_province: {
              [Op.like]: `%${chip_value.chip_value}%`,
            },
          });

        });

        const arr = {
          model: model.company_location_gen,
          where: {
            [Op.or]: list_ofChipData,
          },
        };

        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }
      if (chipData.chip_group == "Region") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {

          list_ofChipData.push({
            address_region: {
              [Op.like]: `%${chip_value.chip_value}%`,
            },
          });

        });

        const arr = {
          model: model.company_location_gen,
          where: {
            [Op.or]: list_ofChipData,
          },
        };

        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }
      if (chipData.chip_group == "Country") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {

          list_ofChipData.push({
            company_address_country: {
              [Op.like]: `%${chip_value.chip_value}%`,
            },
          });
          list_ofChipData.push({
            personal_address_country: {
              [Op.like]: `%${chip_value.chip_value}%`,
            },
          });

        });

        const arr = {
          model: model.company_location_gen,
          where: {
            [Op.or]: list_ofChipData,
          },
        };

        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }
      if (chipData.chip_group == "Status") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {

          list_ofChipData.push({ company_status: `${chip_value.chip_value}` });
        });
        where = {
          [Op.or]: list_ofChipData,
          ...where,
        };
      }

      if (chipData.chip_group == "Company Category") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {

          list_ofChipData.push({
            company_category: {
              [Op.like]: `%${chip_value.chip_value}%`
            }
          });
        });
        where = {
          [Op.or]: list_ofChipData,
          ...where,
        };
      }

      if (chipData.chip_group == "Incorporation date") {
        let list_ofChipData = [];
        if (chipData.chip_values.length < 2) {
          return res.send({ "status": false, "message": "Please send from date in index 0 and to date in index 1 atleast two dates" })
        }
        list_ofChipData.push({ incorporation_date: { [Op.gte]: stringToDate(`${chipData.chip_values[0].chip_value}`) } });
        list_ofChipData.push({ incorporation_date: { [Op.lte]: stringToDate(`${chipData.chip_values[1].chip_value}`) } });
        where = {
          [Op.and]: list_ofChipData,
          ...where,
        };
      }

      if (chipData.chip_group == "Dissolution Date") {
        let list_ofChipData = [];
        if (chipData.chip_values.length < 2) {
          return res.send({ "status": false, "message": "Please send from date in index 0 and to date in index 1 atleast two dates" })
        }
        list_ofChipData.push({ dissolution_date: { [Op.gte]: stringToDate(`${chipData.chip_values[0].chip_value}`) } });
        list_ofChipData.push({ dissolution_date: { [Op.lte]: stringToDate(`${chipData.chip_values[1].chip_value}`) } });
        where = {
          [Op.and]: list_ofChipData,
          ...where,
        };
      }
      if (chipData.chip_group == "Last Accounts Date") {
        let list_ofChipData = [];
        if (chipData.chip_values.length != 2) {
          return res.send({ "status": false, "message": "Please send from date in index 0 and to date in index 1 atleast two dates" })
        }
        list_ofChipData.push({ last_accounts_date: { [Op.gte]: stringToDate(`${chipData.chip_values[0].chip_value}`) } });
        list_ofChipData.push({ last_accounts_date: { [Op.lte]: stringToDate(`${chipData.chip_values[1].chip_value}`) } });
        where = {

          ...where,
        };

        const arr = {
          model: model.companies,
          where: {
            [Op.and]: list_ofChipData,
          },
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
        }
      }

      if (chipData.chip_group == "UK SIC Section") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push({ sic_section: { [Op.like]: `%${chip_value.chip_value}%` } });
        });

        const arr = {
          model: model.companies,
          where: {
            [Op.or]: list_ofChipData,
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }
      if (chipData.chip_group == "SubSector") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push({ main_subsector: { [Op.like]: `%${chip_value.chip_value}%` } });
        });

        const arr = {
          model: model.companies,
          where: {
            [Op.or]: list_ofChipData,
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }

      if (chipData.chip_group == "Sector") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push({ main_sector: { [Op.like]: `%${chip_value.chip_value}%` } });
        });

        const arr = {
          model: model.companies,
          where: {
            [Op.or]: list_ofChipData,
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }

      if (chipData.chip_group == "NACE") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push({ nace_rev_2_code: { [Op.like]: `%${chip_value.chip_value}%` } });
        });

        const arr = {
          model: model.companies,
          where: {
            [Op.or]: list_ofChipData,
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }

      if (chipData.chip_group == "UK SIC") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push({ uk_sic_2007_code: { [Op.like]: `%${chip_value.chip_value}%` } });
        });

        const arr = {
          model: model.companies,
          where: {
            [Op.or]: list_ofChipData,
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }

      if (chipData.chip_group == "NAICS") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push({ naics_2017_code: { [Op.like]: `%${chip_value.chip_value}%` } });
        });

        const arr = {
          model: model.companies,
          where: {
            [Op.or]: list_ofChipData,
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }

      if (chipData.chip_group == "Director Name") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push({ name: { [Op.like]: `%${chip_value.chip_value}%` } });
        });

        const arr = {
          model: model.officer,
          where: {
            [Op.or]: list_ofChipData, 
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }

      if (chipData.chip_group == "Director Role") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push({ officer_role: { [Op.like]: `%${chip_value.chip_value}%` } });
        });

        const arr = {
          model: model.officer,
          where: {
            [Op.or]: list_ofChipData, 
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }

      if (chipData.chip_group == "Director Occupation") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push({ occupation: { [Op.like]: `%${chip_value.chip_value}%` } });
        });

        const arr = {
          model: model.officer,
          where: {
            [Op.or]: list_ofChipData, 
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }

      if (chipData.chip_group == "Director Nationality") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push({ nationality: { [Op.like]: `%${chip_value.chip_value}%` } });
        });

        const arr = {
          model: model.officer,
          where: {
            [Op.or]: list_ofChipData, 
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }
      if (chipData.chip_group == "Director Country of Residence") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push({ country_of_residence: { [Op.like]: `%${chip_value.chip_value}%` } });
        });

        const arr = {
          model: model.officer,
          where: {
            [Op.or]: list_ofChipData, 
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }
      if (chipData.chip_group == "Director Resign Date") {
        let list_ofChipData = [];
        if (chipData.chip_values.length < 2) {
          return res.send({ "status": false, "message": "Please send from date in index 0 and to date in index 1 atleast two dates" })
        }
        list_ofChipData.push({ resigned_on: { [Op.gte]: stringToDate(`${chipData.chip_values[0].chip_value}`) } });
        list_ofChipData.push({ resigned_on: { [Op.lte]: stringToDate(`${chipData.chip_values[1].chip_value}`) } });
        
        const arr = {
          model: model.officer,
          where: {
            [Op.and]: list_ofChipData, 
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }
      if (chipData.chip_group == "Director Appointment Date") {
        let list_ofChipData = [];
        if (chipData.chip_values.length < 2) {
          return res.send({ "status": false, "message": "Please send from date in index 0 and to date in index 1 atleast two dates" })
        }
        list_ofChipData.push({ appointed_on: { [Op.gte]: stringToDate(`${chipData.chip_values[0].chip_value}`) } });
        list_ofChipData.push({ appointed_on: { [Op.lte]: stringToDate(`${chipData.chip_values[1].chip_value}`) } });
        const arr = {
          model: model.officer,
          where: {
            [Op.and]: list_ofChipData, 
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }
      if (chipData.chip_group == "Ownership Name") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push({ name: { [Op.like]: `%${chip_value.chip_value}%` } });
        });

        const arr = {
          model: model.dbp_psc_gen,
          where: {
            [Op.or]: list_ofChipData, 
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }
      if (chipData.chip_group == "Ownership Kind") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push({ kind: { [Op.like]: `%${chip_value.chip_value}%` } });
        });

        const arr = {
          model: model.dbp_psc_gen,
          where: {
            [Op.or]: list_ofChipData, 
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }
      
      if (chipData.chip_group == "Ownership Nationality") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push({ nationality: { [Op.like]: `%${chip_value.chip_value}%` } });
        });

        const arr = {
          model: model.dbp_psc_gen,
          where: {
            [Op.or]: list_ofChipData, 
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }
      
      if (chipData.chip_group == "Ownership Country of Residence") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push({ country_of_residence: { [Op.like]: `%${chip_value.chip_value}%` } });
        });

        const arr = {
          model: model.dbp_psc_gen,
          where: {
            [Op.or]: list_ofChipData, 
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }
      
      if (chipData.chip_group == "Current Assets") {
        let list_ofChipData = [];
        if (chipData.chip_values.length != 2) {
          res.send({ status: false, message: "Min Max Filter it neesds 2 values to work" })
        }
        list_ofChipData.push({ value: { [Op.gte]: chipData.chip_values[0].chip_value } });
        list_ofChipData.push({ value: { [Op.lte]: chipData.chip_values[1].chip_value } });
        list_ofChipData.push({value_name:  {
          [Op.or] :[`CurrentAssets`,`CurrentAssets:Consoliadated`]
        }});

        const arr = {
          model: model.dbf_financials_main,
          where: {
            [Op.and]: list_ofChipData,
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }
      if (chipData.chip_group == "Fixed Assets") {
        let list_ofChipData = [];
        if (chipData.chip_values.length != 2) {
          res.send({ status: false, message: "Min Max Filter it neesds 2 values to work" })
        }
        list_ofChipData.push({ value: { [Op.gte]: chipData.chip_values[0].chip_value } });
        list_ofChipData.push({ value: { [Op.lte]: chipData.chip_values[1].chip_value } });
        list_ofChipData.push({value_name:  {
          [Op.or] :[`FixedAssets`,`FixedAssets:Consolidated`]
        }});

        const arr = {
          model: model.dbf_financials_main,
          where: {
            [Op.and]: list_ofChipData,
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }
      if (chipData.chip_group == "Equity") {
        let list_ofChipData = [];
        if (chipData.chip_values.length != 2) {
          res.send({ status: false, message: "Min Max Filter it neesds 2 values to work" })
        }
        list_ofChipData.push({ value: { [Op.gte]: chipData.chip_values[0].chip_value } });
        list_ofChipData.push({ value: { [Op.lte]: chipData.chip_values[1].chip_value } });
        list_ofChipData.push({value_name:  {
          [Op.or] :[`Equity`,`NetAssetsLiabilities`,`ShareholderFunds`,`Equity:Consolidated`,`NetAssetsLiabilities:Consolidated`]
        }});

        const arr = {
          model: model.dbf_financials_main,
          where: {
            [Op.and]: list_ofChipData,
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }

      if (chipData.chip_group == "Turnover") {
        let list_ofChipData = [];
        if (chipData.chip_values.length != 2) {
          res.send({ status: false, message: "Min Max Filter it neesds 2 values to work" })
        }
        list_ofChipData.push({ value: { [Op.gte]: chipData.chip_values[0].chip_value } });
        list_ofChipData.push({ value: { [Op.lte]: chipData.chip_values[1].chip_value } });
        list_ofChipData.push({value_name:  {
          [Op.or] :[`Turnover`,`TurnoverRevenue`,`TurnoverRevenue:Consolidated`]
        }});

        const arr = {
          model: model.dbf_financials_main,
          where: {
            [Op.and]: list_ofChipData,
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }

      if (chipData.chip_group == "Number of Employees") {
        let list_ofChipData = [];
        if (chipData.chip_values.length != 2) {
          res.send({ status: false, message: "Min Max Filter it neesds 2 values to work" })
        }
        list_ofChipData.push({ value: { [Op.gte]: chipData.chip_values[0].chip_value } });
        list_ofChipData.push({ value: { [Op.lte]: chipData.chip_values[1].chip_value } });
        list_ofChipData.push({value_name:  {
          [Op.or] :[`EmployeesTotal`,`AverageNumberEmployeesDuringPeriod`]
        }});

        const arr = {
          model: model.dbf_financials_main,
          where: {
            [Op.and]: list_ofChipData,
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }

      if (chipData.chip_group == "Gross Profit") {
        let list_ofChipData = [];
        if (chipData.chip_values.length != 2) {
          res.send({ status: false, message: "Min Max Filter it neesds 2 values to work" })
        }
        list_ofChipData.push({ value: { [Op.gte]: chipData.chip_values[0].chip_value } });
        list_ofChipData.push({ value: { [Op.lte]: chipData.chip_values[1].chip_value } });
        list_ofChipData.push({value_name:  {
          [Op.or] :[`GrossProfitLoss`,`GrossProfitLoss:Consolidated`]
        }});

        const arr = {
          model: model.dbf_financials_main,
          where: {
            [Op.and]: list_ofChipData,
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }

      if (chipData.chip_group == "Trade Creditors") {
        let list_ofChipData = [];
        if (chipData.chip_values.length != 2) {
          res.send({ status: false, message: "Min Max Filter it neesds 2 values to work" })
        }
        list_ofChipData.push({ value: { [Op.gte]: chipData.chip_values[0].chip_value } });
        list_ofChipData.push({ value: { [Op.lte]: chipData.chip_values[1].chip_value } });
        list_ofChipData.push({value_name:  {
          [Op.or] :[`TradeCreditorsTradePayables`,`TradeCreditorsTradePayables:Consolidated`]
        }});

        const arr = {
          model: model.dbf_financials_main,
          where: {
            [Op.and]: list_ofChipData,
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }

      if (chipData.chip_group == "Trade Debtors") {
        let list_ofChipData = [];
        if (chipData.chip_values.length != 2) {
          res.send({ status: false, message: "Min Max Filter it neesds 2 values to work" })
        }
        list_ofChipData.push({ value: { [Op.gte]: chipData.chip_values[0].chip_value } });
        list_ofChipData.push({ value: { [Op.lte]: chipData.chip_values[1].chip_value } });
        list_ofChipData.push({value_name:  {
          [Op.or] :[`TradeDebtors`,`TradeDebtorsTradeReceivables`,`TradeDebtorsTradeReceivables:Consolidated`,`TradeDebtorsTradeReceivables:Consolidated`]
        }});

        const arr = {
          model: model.dbf_financials_main,
          where: {
            [Op.and]: list_ofChipData,
            ...where,
          } 
        };
        otherOptions = {  
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }


      if (chipData.chip_group == "Importer Status") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push({ importer: { [Op.like]: `%${chip_value.chip_value}%` } });
        });

        const arr = {
          model: model.companies,
          where: {
            [Op.or]: list_ofChipData,
            ...where,
          }
        };
        otherOptions = {
          include: otherOptions.include
            ? otherOptions.include.push(arr)
            : [arr],
          ...otherOptions,
        };
      }

      
      if (chipData.chip_group == "Exporter Status") {
        let list_ofChipData = [];
        chipData.chip_values.forEach((chip_value) => {
          list_ofChipData.push({ exporter: { [Op.like]: `%${chip_value.chip_value}%` } });
        });

        const arr = {
          model: model.companies,
          where: {
            [Op.or]: list_ofChipData,
            ...where,
          }
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

  let hmrcExportsOpreationsYearly = await dao.getHmrcExport({
    attributes: [
      [Sequelize.literal(`YEAR(hmrc_date2)`), "year"],
      [Sequelize.literal(`COUNT(*)`), "num_of_opreations"],
    ],
    group: [Sequelize.fn("YEAR", Sequelize.col("hmrc_date2"))],
    order: [[Sequelize.literal(`YEAR(hmrc_date2)`), "DESC"]],
    where: {
      chn: company_offical.dataValues.chn,
    },
  });
  let hmrcExportsOpreationsMonthly = await dao.getHmrcExport({
    attributes: [
      [Sequelize.literal(`YEAR(hmrc_date2)`), "year"],
      [Sequelize.literal(`MONTH(hmrc_date2)`), "month"],
      [Sequelize.literal(`COUNT(*)`), "num_of_opreations"],
    ],
    group: [Sequelize.col("hmrc_date")],
    order: [
      [Sequelize.literal(`YEAR(hmrc_date2)`), "DESC"],
      [Sequelize.literal(`MONTH(hmrc_date2)`), "DESC"],
    ],
    where: {
      chn: company_offical.dataValues.chn,
    },
  });
  let hmrcImportOpreationsYearly = await dao.getHmrcImport({
    attributes: [
      [Sequelize.literal(`YEAR(hmrc_date2)`), "year"],
      [Sequelize.literal(`COUNT(*)`), "num_of_opreations"],
    ],
    group: [Sequelize.fn("YEAR", Sequelize.col("hmrc_date2"))],
    order: [[Sequelize.literal(`YEAR(hmrc_date2)`), "DESC"]],
    where: {
      chn: company_offical.dataValues.chn,
    },
  });

  let hmrcImportOpreationsMonthly = await dao.getHmrcImport({
    attributes: [
      [Sequelize.literal(`YEAR(hmrc_date2)`), "year"],
      [Sequelize.literal(`MONTH(hmrc_date2)`), "month"],
      [Sequelize.literal(`COUNT(*)`), "num_of_opreations"],
    ],
    group: [Sequelize.col("hmrc_date")],
    order: [
      [Sequelize.literal(`YEAR(hmrc_date2)`), "DESC"],
      [Sequelize.literal(`MONTH(hmrc_date2)`), "DESC"],
    ],
    where: {
      chn: company_offical.dataValues.chn,
    },
  });

  let exportCodeDescription = await dao.getHmrcExportCodeDescription({
    attributes: ["hmrc_code", "chn", "code_description"],
    where: {
      chn: company_offical.dataValues.chn,
    },
  });

  let importCodeDescription = await dao.getHmrcImportCodeDescription({
    attributes: ["hmrc_code", "chn", "code_description"],
    where: {
      chn: company_offical.dataValues.chn,
    },
  });

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
          imports: hmrcImportOpreationsMonthly,
        },
        yearly_opreations: {
          exports: hmrcExportsOpreationsYearly,
          imports: hmrcImportOpreationsYearly,
        },
        hmrc_code_description: {
          exports: exportCodeDescription,
          imports: importCodeDescription,
        },
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

async function businessOverviewAbout(req, res) {
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

if(company_offical)  {
  let company = await dao.getCompany({
    where: {
      chn: company_offical.dataValues.chn,
    },
  });

  let no_of_directors = await dao.getNumberOfDirectorsCompanies({
    where: {
      chn:  company_offical.dataValues.chn,
      officer_role: {
        [Op.like]: "%director%",
      },
    },
  });
  let no_of_secretary = await dao.getNumberOfDirectorsCompanies({
    where: {
      chn: company_offical.dataValues.chn,
      officer_role: {
        [Op.like]: "%secretary%",
      },
    },
  });
  let no_of_active_directors = await dao.getNumberOfDirectorsCompanies({
    where: {
      chn: company_offical.dataValues.chn,
      resigned_on: null,
    },
  });
  let no_of_resigned_directors = await dao.getNumberOfDirectorsCompanies({
    where: {
      chn: company_offical.dataValues.chn,
      resigned_on: {
        [Op.ne]: null,
      },
    },
  });
  let officers = await dao.getOfficersForCompany({
    page: page,
    paginate: item_per_page,
    where: {
      chn: company_offical.dataValues.chn,
    },
    attributes: { exclude: ["id"] },
  });


  let turnover_raw = await dao.getFinacialsForCompany({
    attributes : ["value","value_name","correctdate2"],
      order: [ ["correctdate2","DESC"]],
    where: {
      chn: company_offical.dataValues.chn,
      value_name:  {
        [Op.or] :[`Turnover`,`TurnoverRevenue`,`TurnoverRevenue:Consolidated`]
      },
      
    },
  })


  let gross_profit = await dao.getFinacialsForCompany({
    attributes : ["value","value_name","correctdate2"],
      order: [ ["correctdate2","DESC"]],
    where: {
      chn: company_offical.dataValues.chn,
      value_name:  {
        [Op.or] :[`GrossProfitLoss`,`GrossProfitLoss:Consolidated`]
      },
      
    },
  })
  let EmployeesTotal = await dao.getFinacialsForCompany({
    attributes : ["value","value_name","correctdate2"],
      order: [ ["correctdate2","DESC"]],
    where: {
      chn: company_offical.dataValues.chn,
      value_name:  {
        [Op.or] :[`EmployeesTotal`]
      },
      
    },
  })
  
  result = {
    company_name : company?company.dataValues.business_name:company_offical.dataValues.company_name,
    website:company?company.dataValues.website_url_1:"",
    postcode:company?company.dataValues.postcode_trim:"",
    no_of_employee:company?company.dataValues.size_estimate:0,  
    facebook_link:"",
    linkedIn_link:"",
    twitter_link:"",
    graph:{
      turnover:turnover_raw,
      total_assest:[],
      total_libilities:[],
      net_worth:[],
      profit_before_tax:gross_profit,
      ebidta:[]
    },
    turnover:{
      turnover_estimate:company?company.dataValues.turnover_estimate:""
    },
    total_assest:{},
    total_libilities:{},
    net_worth:{},
    profit_before_tax:{},
    ebidta:{},
    director:{
      total:no_of_directors,
      activate:no_of_active_directors,
      secretory:no_of_secretary,
      inactive:0,
      resgin:no_of_resigned_directors
    },
    account_category:company?company.dataValues.company_account_category:"",
    account:"",
    confirmation_statement:"",
    bank_name:"",
    bank_sard_code:"",
    auditor_and_accountant:"",
    director:officers
  }
  return res.send({
    status: true,
    result: result
  });

}else{
  res.send({
    status:false,
    message:`Company with ${uuid} doesnot exist`  })
}
}


module.exports = {
  businessSearch,
  businessPeople,
  businessDirectors,
  businessTrade,
  businessTradeAddress,
  businessOverviewAbout
};
