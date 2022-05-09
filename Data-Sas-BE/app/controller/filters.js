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

async function listAllFilters(req, res) {
    const list = await dao.getAllBusinessSearchFilters()
    res.send({"status":"true","result":list})
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