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
    const list = await dao.getAllBusinessSearchFilters()
    const listFinal = []
    for (let element of list) {
        let options = {}
        element =  element.toJSON()
        if (element.name== "Account Category" && element.category == "Company"){
                const distinctAccountCategory = await dao.getDistinctCompanyAccountCategory()
                listOfSuggestion = []
                for(let category of distinctAccountCategory){
                        category = category.toJSON()
                        listOfSuggestion.push(category.company_account_category)
                }
                options = {
                    suggestions : listOfSuggestion,
                    ...options
                }
          
        }

        listFinal.push({
            featureEnabled :true,
            ...element,
            ...options
        })
    }
    res.send({"status":"true","result":listFinal})
};

async function filterSuggestions(req,res){
    const filterId = req.params.uuid
    const {page,paginate} = req.body
    const filter = await dao.getFilterById(filterId)
    if (filter.dataValues.name=="Company Name"){
        const options = {
            attributes: {exclude: ['id']},
            page:page?page:1,
            paginate:paginate?paginate:10
        }
        const result = await dao.getCompanies(options);
        return res.send({"status":"true","page":options.page,"total_pages":result.pages,"total":result.total,"result":result.docs})
    }

    return  res.send({"status":false})
    
}

module.exports = {
    listAllFilters,
    filterSuggestions
  };