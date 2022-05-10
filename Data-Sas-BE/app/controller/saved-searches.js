const { v4: uuidv4 } = require("uuid");
const helper = require("../helper/validator");
const dao = require("../dao/saved-searches");
const errorlog = require("../../utils/logger").errorlog;
const successlog = require("../../utils/logger").successlog;
const messages = require("../../utils/messages");

async function createSavedSearch(req, res) {
  const user = await dao.findUserByEmail({
    where: {
      u_email: req.decoded.u_email,
    },
  });
  let body = req.body;

  const data = {
    user_id: user.dataValues.id,
    
    ...req.body
  };

  const created = await dao.createSavedSearch(data);
//   const result = await dao.findAllSavedSearches();
  res.send({ status: true, result: created });
}


async function listUserSavedSearches(req,res){
  const user = await dao.findUserByEmail({
    where: {
      u_email: req.decoded.u_email,
    },
  });
  const result = await dao.findAllSavedSearches({where:{
    user_id:user.dataValues.id
  }});
  res.send({ status: true, result: result });
}
module.exports = {
  createSavedSearch,listUserSavedSearches
};
