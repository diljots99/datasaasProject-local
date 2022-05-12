const express = require("express");
const router = express.Router();
const fs = require('fs');
const path = require('path');
const model = require("../../models");
const { parse } = require('fast-csv');
const { uuid } = require('uuidv4');

router.get("/test", (req,res)=>{
    let rows = [];

    fs.createReadStream(path.resolve(__dirname,'..', '..','available_business_filters.csv'))
    .pipe(parse({ headers: true }))
    .on('error', error => console.error(error))
    .on('data', row => {
        console.log(row);
        //each row can be written to db
        rows.push(row);
        model.available_business_filters.create({
            uuid:uuid(),
            name: row.name,
            category: row.category,
            type: row.type
        }).then((test)=>{
            console.log(test)
        })
    })
    .on('end', rowCount => {
        console.log(`Parsed ${rowCount} rows`);
        // console.log(rows[81484].postcode); // this data can be used to write to a db in bulk
    });
    console.log(model.available_business_filters)

});




router.get("/download")
module.exports = router;
