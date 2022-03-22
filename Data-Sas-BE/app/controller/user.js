const CryptoJS = require("crypto-js");
const { v4: uuidv4 } = require("uuid");
const crptoKey = "secret_key_123";
const accessTokenSecret = "my_secrect_key";
const jwt = require("jsonwebtoken");
const helper = require("../helper/validator");
const dao = require("../dao/user");
const errorlog = require("../../utils/logger").errorlog;
const successlog = require("../../utils/logger").successlog;
const messages = require("../../utils/messages");
/**
 * @author   Harinder Kumar
 * @description  User Login
 * @param    {String} u_email
 * @param    {String} u_password
 * @return   {object}
 */
async function login(req, res) {
  try {
    let savedUser, response, objLogin;
    const { u_email, u_password } = req.body;
    objLogin = { u_email, u_password };
    response = helper.userLoginValidator(objLogin);
    if (response.error) {
      res.json({
        status: false,
        msg: response.error.details,
      });
    } else {
      savedUser = await dao.findOneUserData({
        u_email: objLogin.u_email,
        u_status: true,
      });
      if (savedUser) {
        let bytes = CryptoJS.AES.decrypt(savedUser.u_password, crptoKey);
        let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        if (decryptedData == objLogin.u_password) {
          const jwt_token = jwt.sign(
            {
              id: savedUser.id,
              u_email: savedUser.u_email,
            },
            accessTokenSecret,
            {
              expiresIn: "30m",
            }
          );
         
          successlog.info(messages.toastr.USER_LOGIN);
          res.json({
            status: true,
            token: jwt_token,
            msg: messages.toastr.USER_LOGIN,
            data: savedUser,
          });
        } else {
          errorlog.error(
            `Error Occur in User Login : ${messages.toastr.INCORRECT_PASSWORD} `
          );
          res.json({
            status: false,
            msg: messages.toastr.INCORRECT_PASSWORD,
          });
        }
      } else {
        errorlog.error(
          `Error Occur in User Login : ${messages.toastr.USER_INVALID_LOGIN} `
        );
        res.json({
          msg: messages.toastr.USER_INVALID_LOGIN,
          status: false,
        });
      }
    }
  } catch (error) {
    errorlog.error(`Error Occur in User Login : ${error} `);
    res.json({
      msg: messages.toastr.SERVER_ERROR,
      error: error,
      status: false,
    });
  }
}

/**
 * @author   Harinder Kumar
 * @description  User SignUp
 * @param    {String} u_first_name,
 * @param    {String} u_last_name,
 * @param    {String} u_country_code,
 * @param    {INTEGER} u_phone_no,
 * @param    {String} u_company_name,
 * @param    {String} u_company_no,
 * @param    {String} u_city,
 * @param    {String} u_email,
 * @param    {String} u_country,
 * @param    {String} u_address,
 * @param    {INTEGER} u_postal_code,
 * @param    {String} u_email_option,
 * @param    {String} u_password,
 * @param    {String} u_subscriptions_id
 * @return   {object}
 */
async function signup(req, res) {
  try {
    let savedUser, checkUserEmail, response, signupData;
    const {
      u_first_name,
      u_last_name,
      u_country_code,
      u_phone_no,
      u_company_name,
      u_company_no,
      u_city,
      u_email,
      u_country,
      u_address,
      u_postal_code,
      u_email_option,
      u_password,
      u_subscriptions_id,
    } = req.body;
    signupData = {
      uuid: uuidv4(),
      u_first_name,
      u_last_name,
      u_country_code,
      u_phone_no,
      u_company_name,
      u_company_no,
      u_city,
      u_email,
      u_country,
      u_address,
      u_postal_code,
      u_email_option,
      u_password: CryptoJS.AES.encrypt(
        JSON.stringify(u_password),
        crptoKey
      ).toString(),
      u_status: true,
      u_subscriptions_id,
      u_role: 1, //1 for user & 2 for admin
    };
    response = helper.userSignupValidator(signupData);
    if (response.error) {
      res.json({
        status: false,
        msg: response.error.details,
      });
    } else {
      checkUserEmail = await dao.checkDuplicateEmailForUsers({
        u_email: signupData.u_email,
      });
      if (checkUserEmail.length <= 0) {
        savedUser = await dao.saveUserData(signupData);
        if (savedUser) {
          successlog.info(messages.toastr.USER_SIGNUP);
          res.json({
            msg: messages.toastr.USER_SIGNUP,
            status: true,
            data: savedUser,
          });
        } else {
          errorlog.error(
            `Error Occur in User Signup : ${messages.toastr.S_W_R} `
          );
          res.json({
            msg: messages.toastr.S_W_R,
            status: false,
          });
        }
      } else {
        errorlog.error(
          `Error Occur in User Signup : ${messages.toastr.USER_DUPLICATE_EMAIL} `
        );
        res.json({
          msg: messages.toastr.USER_DUPLICATE_EMAIL,
          status: false,
        });
      }
    }
  } catch (error) {
    errorlog.error(`Error Occur in User Signup : ${error} `);
    res.json({
      msg: messages.toastr.SERVER_ERROR,
      error: error,
      status: false,
    });
  }
}

/**
 * @author   Harinder Kumar
 * @description  User Get All Records or with id single record
 * @param    {String} uuid or empty
 * @return   {object}
 */
async function getUser(req, res) {
  try {
    let userObj = {
      uuid: req.params.uuid,
    };
    if (!userObj.uuid) {
      savedUser = await dao.findAllUsers();
    } else {
      savedUser = await dao.findOneUserData({ uuid: userObj.uuid });
    }
    if (savedUser) {
      successlog.info(messages.toastr.GET_USER_RECORDS);
      res.status(200).json({
        status: true,
        msg: messages.toastr.GET_USER_RECORDS,
        data: savedUser,
      });
    } else {
      errorlog.error(`Error Occur in Get user info : ${error} `);
      res.json({
        msg: messages.toastr.S_W_R,
        status: false,
      });
    }
  } catch (error) {
    errorlog.error(`Error Occur in Get user info : ${error} `);
    res.json({
      msg: messages.toastr.SERVER_ERROR,
      error: error,
      status: false,
    });
  }
}

/**
 * @author   Harinder Kumar
 * @description  User Change Password
 * @param    {String} u_email
 * @param    {String} old_password
 * @param    {String} new_password
 * @return   {object}
 */
async function changePassword(req, res) {
  try {
    let savedUser, response, requestBody;
    const { u_email, old_password, new_password } = req.body;
    requestBody = {
      u_email,
      old_password,
      new_password,
    };
    response = helper.userChangePasswordValidator(requestBody);
    if (response.error) {
      res.json({
        status: false,
        msg: response.error.details,
      });
    } else {
      savedUser = await dao.findOneUserData({ u_email: requestBody.u_email });
      if (savedUser) {
        let bytes = CryptoJS.AES.decrypt(savedUser.u_password, crptoKey);
        let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        if (decryptedData == requestBody.old_password) {
          let data = await dao.updateUser(
            {
              u_password: CryptoJS.AES.encrypt(
                JSON.stringify(requestBody.new_password),
                crptoKey
              ).toString(),
            },
            { where: { u_email: requestBody.u_email } }
          );
          if (data.length) {
            successlog.info(messages.toastr.USER_PASSWORD_CHANGED);
            res.json({
              status: true,
              message: messages.toastr.USER_PASSWORD_CHANGED,
              data: savedUser,
            });
          } else {
            errorlog.error(
              `Error Occur in User Change Password : ${messages.toastr.S_W_R} `
            );
            res.json({
              msg: messages.toastr.S_W_R,
              status: false,
            });
          }
        } else {
          errorlog.error(
            `Error Occur in User Change Password : ${messages.toastr.INCORRECT_PASSWORD} `
          );
          res.json({
            status: false,
            msg: messages.toastr.INCORRECT_PASSWORD,
          });
        }
      } else {
        errorlog.error(
          `Error Occur in User Change Password : ${messages.toastr.EMAIL_DNE} `
        );
        res.json({
          msg: messages.toastr.EMAIL_DNE,
          status: false,
        });
      }
    }
  } catch (error) {
    errorlog.error(`Error Occur in User Change Password : ${error} `);
    res.json({
      msg: messages.toastr.SERVER_ERROR,
      error: error,
      status: false,
    });
  }
}

/**
 * @author   Harinder Kumar
 * @description  User Update
 * @param    {String} uuid,
 * @param    {String} u_first_name,
 * @param    {String} u_last_name,
 * @param    {String} u_country_code,
 * @param    {INTEGER} u_phone_no,
 * @param    {String} u_company_name,
 * @param    {String} u_company_no,
 * @param    {String} u_city,
 * @param    {String} u_email,
 * @param    {String} u_country,
 * @param    {String} u_address,
 * @param    {INTEGER} u_postal_code,
 * @param    {String} u_email_option
 * @return   {object}
 */
async function updateUser(req, res) {
  try {
    let updateUser, objData, response;
    const {
      uuid,
      u_first_name,
      u_last_name,
      u_country_code,
      u_phone_no,
      u_company_name,
      u_company_no,
      u_city,
      u_email,
      u_country,
      u_address,
      u_postal_code,
      u_email_option,
    } = req.body;
    objData = {
      uuid,
      u_first_name,
      u_last_name,
      u_country_code,
      u_phone_no,
      u_company_name,
      u_company_no,
      u_city,
      u_email,
      u_country,
      u_address,
      u_postal_code,
      u_email_option,
      // u_status: u_status,
      // u_password: u_password,
      // u_subscriptions_id: u_subscriptions_id,
      // u_role: u_role //1 for user & 2 for admin
    };
    // response = helper.userUpdateValidator(objData);
    // if (response.error) {
    //   res.json({
    //     status: false,
    //     msg: response.error.details,
    //   });
    // } else {
    console.log("step-1", objData);
    updateUser = await dao.updateUser(objData, {
      where: { uuid: objData.uuid },
    });
    console.log("step-2", updateUser);
    if (updateUser != 0) {
      successlog.info(messages.toastr.USER_UPDATE_RECORD);
      res.json({
        status: true,
        msg: messages.toastr.USER_UPDATE_RECORD,
        data: updateUser,
      });
    } else {
      errorlog.error(
        `Error Occur in User Update Info : ${messages.toastr.S_W_R} `
      );
      res.json({
        msg: messages.toastr.S_W_R,
        status: false,
      });
    }
    //  }
  } catch (error) {
    errorlog.error(`Error Occur in User Update Info : ${error} `);
    res.json({
      msg: messages.toastr.SERVER_ERROR,
      error: error,
      status: false,
    });
  }
}

module.exports = {
  login,
  signup,
  getUser,
  changePassword,
  updateUser,
};
