const { v4: uuidv4 } = require("uuid");
const helper = require("../helper/validator");
const dao = require("../dao/business");
const errorlog = require("../../utils/logger").errorlog;
const successlog = require("../../utils/logger").successlog;
const messages = require("../../utils/messages");



async function businessSearch(req,res){
    let {page,items_per_page} = req.body

    const options = {
        page: page?page:1,
        paginate:items_per_page?items_per_page:25
    }
    let result = await dao.getCompanies(options)
    res.send({
        page:options.page,
        items_per_page:options.paginate,
        total:result.total,
        pages:result.pages,
        result:result.docs
    })
}

module.exports = {
businessSearch
}