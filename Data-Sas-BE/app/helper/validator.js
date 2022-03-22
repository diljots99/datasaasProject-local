const Joi = require("joi");
/**
 * @author   Harinder Kumar
 * @description  User validation for signup
 */
function userSignupValidator(data) {
  const JoiSchema = Joi.object({
    uuid:Joi.string().required(),
    u_first_name: Joi.string().min(3).max(30).required(),
    u_last_name: Joi.string().required(),
    u_country_code: Joi.string().required(),
    u_phone_no: Joi.number().integer().required(),
    u_company_name: Joi.string().required(),
    u_company_no: Joi.string().required(),
    u_city: Joi.string().required(),
    u_email: Joi.string().email().min(5).max(50).required(),
    u_country: Joi.string().required(),
    u_address: Joi.string().required(),
    u_postal_code: Joi.string().required(),
    u_email_option: Joi.string().required(),
    u_password: Joi.string().required(),
    u_status: Joi.boolean().required(),
    u_subscriptions_id: Joi.number().integer().required(),
    u_role: Joi.number().integer().required(),
  }).options({ abortEarly: false });
  return JoiSchema.validate(data);
}
/**
 * @author   Harinder Kumar
 * @description  User validation for update record
 */
// function userUpdateValidator(data) {
//   const JoiSchema = Joi.object({
//     uuid:Joi.string().required(),
//     u_first_name: Joi.string().min(3).max(30).required(),
//     u_last_name: Joi.string().required(),
//     u_country_code: Joi.string().required(),
//     u_phone_no: Joi.number().integer().required(),
//     u_company_name: Joi.string().required(),
//     u_company_no: Joi.string().required(),
//     u_city: Joi.string().required(),
//     u_email: Joi.string().email().min(5).max(50).required(),
//     u_country: Joi.string().required(),
//     u_address: Joi.string().required(),
//     u_postal_code: Joi.number().integer().required(),
//     u_email_option: Joi.string().required(),
//     // u_password: Joi.string()
//     //     .required(),
//     // u_status: Joi.boolean()
//     //     .required(),
//     // u_subscriptions_id: Joi.number().integer()
//     //     .required(),
//     // u_role: Joi.number().integer()
//     //     .required(),
//   }).options({ abortEarly: false });
//   return JoiSchema.validate(data);
// }
/**
 * @author   Harinder Kumar
 * @description  User validation for Login
 */
function userLoginValidator(data) {
  const JoiSchema = Joi.object({
    u_email: Joi.string().email().min(5).max(50).required(),
    u_password: Joi.string().required(),
  }).options({ abortEarly: false });
  return JoiSchema.validate(data);
}
/**
 * @author   Harinder Kumar
 * @description  User validation for Change Password
 */
function userChangePasswordValidator(data) {
  const JoiSchema = Joi.object({
    u_email: Joi.string().email().min(5).max(50).required(),
    old_password: Joi.string().required(),
    new_password: Joi.string().required(),
  }).options({ abortEarly: false });
  return JoiSchema.validate(data);
}

/**
 * @author   Harinder Kumar
 * @description  Business Watch validation for saveSingleData
 */
function validateCompanyMonitorData(data) {
  const JoiSchema = Joi.object({
    uuid:Joi.string().required(),
    user_id:Joi.number().integer().required(),
    company_id:Joi.number().integer().required(),
    b_watch_status:Joi.boolean().required()
  }).options({ abortEarly: false });
  return JoiSchema.validate(data);
}
/**
 * @author   Harinder Kumar
 * @description  Business Watch validation for saveSingleData
 */
 function validateDirectorMonitorData(data) {
  const JoiSchema = Joi.object({
    uuid:Joi.string().required(),
    officer_id:Joi.number().integer().required(),
    user_id:Joi.number().integer().required(),
    d_watch_status:Joi.boolean().required()
  }).options({ abortEarly: false });
  return JoiSchema.validate(data);
}

function validateCompanyNotesData(data){

  const JoiSchema = Joi.object({
    uuid:Joi.string().required(),
    user_id:Joi.number().integer().required(),
    company_id:Joi.number().integer().required(),
    n_company_name:Joi.string().required(),
    n_text:Joi.string().required()
  }).options({ abortEarly: false });

  return JoiSchema.validate(data);
}

function validateDeleteBussinessWatchData(data) {
  const JoiSchema = Joi.object({
    uuid:Joi.string().required(),
    user_id:Joi.string().required(),
    flag:Joi.string().required()
  }).options({ abortEarly: false });
  return JoiSchema.validate(data);
}
module.exports = {
  //userUpdateValidator,
  userSignupValidator,
  userLoginValidator,
  validateCompanyNotesData,
  userChangePasswordValidator,
  validateCompanyMonitorData,
  validateDirectorMonitorData,
  validateDeleteBussinessWatchData
};
