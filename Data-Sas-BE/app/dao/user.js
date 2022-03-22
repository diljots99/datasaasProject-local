const model = require("../../models");
/**
 * @author   Harinder Kumar
 * @description  Find single record of user by condition from db
 */
function findOneUserData(data) {
  return model.User.findOne({ where: data });
}
/**
 * @author   Harinder Kumar
 * @description  save user data in db
 */
function saveUserData(data) {
  return model.User.create(data);
}
/**
 * @author   Harinder Kumar
 * @description  check duplicate email for user
 */
function checkDuplicateEmailForUsers(data) {
  return model.User.findAll({ where: data });
}
/**
 * @author   Harinder Kumar
 * @description  find all saved user records
 */
function findAllUsers() {
  return model.User.findAll();
}
/**
 * @author   Harinder Kumar
 * @description  User validation for signup
 */
function updateUser(data, u_condition) {
  return model.User.update(data, u_condition);
}
module.exports = {
  findOneUserData,
  saveUserData,
  checkDuplicateEmailForUsers,
  findAllUsers,
  updateUser
};
