const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const model = require("../../models");
const { parse } = require("fast-csv");
const { uuid } = require("uuidv4");

router.get("/test", (req, res) => {
  let rows = [];

  fs.createReadStream(
    path.resolve(__dirname, "..", "..", "available_business_filters.csv")
  )
    .pipe(parse({ headers: true }))
    .on("error", (error) => console.error(error))
    .on("data", (row) => {
      console.log(row);
      //each row can be written to db
      rows.push(row);
      model.available_business_filters
        .create({
          uuid: uuid(),
          name: row.name,
          category: row.category,
          type: row.type,
        })
        .then((test) => {
          console.log(test);
        });
    })
    .on("end", (rowCount) => {
      console.log(`Parsed ${rowCount} rows`);
      // console.log(rows[81484].postcode); // this data can be used to write to a db in bulk
    });
  console.log(model.available_business_filters);
});

router.get("/hmrc_code", (req, res) => {
  let rows = [];

  fs.createReadStream(
    path.resolve(__dirname, "..", "..", "csv_seed/dbc_hmrc_code.csv")
  )
    .pipe(parse({ headers: true }))
    .on("error", (error) => console.error(error))
    .on("data", (row) => {
      //each row can be written to db
      rows.push({
        uuid: uuid(),
        ...row,
      });
    })
    .on("end", (rowCount) => {
      console.log(`Parsed ${rowCount} rows`);
      model.hmrc_code
        .bulkCreate(rows, {
          ignoreDuplicates: true,
        })
        .then((test) => {
          console.log(test);
        });
      // console.log(rows[81484].postcode); // this data can be used to write to a db in bulk
    });
});

let RESults = [];
router.get("/tests", async (req, res) => {
  let someting = await model.View_unique_hmrc_exports.findAll({
    attributes: ["hmrc_code1", "chn"],
  });

  for (let some of someting) {
    try {
      let element = some.toJSON();
      if (element.hmrc_code1) {
        let res = await CallAPI(element.hmrc_code1);
        if (res) {
          RESults.push({
            hmrc_code:element.hmrc_code1,
            code_description:res.data.data.attributes.description,
            uuid:uuid()
          });
          console.log({
            hmrc_code:element.hmrc_code1,
            code_description:res.data.data.attributes.description,
            uuid:uuid()
          });
        }
      }
     
    } catch (error) {}
  }

  let result = await model.hmrc_code.bulkCreate(RESults, {
    ignoreDuplicates: true,
  });
  console.log(someting);
});

async function CallAPI(code) {
  var axios = require("axios");

  var config = {
    method: "get",
    url: `https://www.trade-tariff.service.gov.uk/api/v2/commodities/${code}00`,
    headers: {},
  };
  try {
    let res = await axios(config);
    return res;
  } catch (error) {}
}

module.exports = router;
