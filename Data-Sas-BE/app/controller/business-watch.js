const { v4: uuidv4 } = require("uuid");
const helper = require("../helper/validator");
const dao = require("../dao/business-watch");
const errorlog = require("../../utils/logger").errorlog;
const successlog = require("../../utils/logger").successlog;
const messages = require("../../utils/messages");

//----------------------------Company ------------------------------------------

async function getCompanyContact(req, res) {
  try {
    let company_id = req.params.id;
    if (!company_id) {
      res.json({
        status: false,
        msg: "company_id is required",
      });
    } else {
      savedUser = await dao.getCompanyContactById({ company_id: company_id });
      if (savedUser) {
        successlog.info(messages.toastr.GET_USER_RECORDS);
        res.json({
          msg: messages.toastr.GET_USER_RECORDS,
          status: true,
          data: savedUser,
        });
      }
    }
  } catch (error) {
    errorlog.error(`Error Occur in Business Watch Save Data : ${error} `);
    res.json({
      msg: messages.toastr.SERVER_ERROR,
      error: error,
      status: false,
    });
  }
}

async function getAboutKeyNotes(req, res) {
  try {
    let company_id = req.params.id;
    if (!company_id) {
      res.json({
        status: false,
        msg: "company_id is required",
      });
    } else {
      savedUser = await dao.getAboutKeyNotesById({ company_id: company_id });
      if (savedUser) {
        successlog.info(messages.toastr.GET_USER_RECORDS);
        res.json({
          msg: messages.toastr.GET_USER_RECORDS,
          status: true,
          data: savedUser,
        });
      }
    }
  } catch (error) {
    errorlog.error(`Error Occur in Business Watch Save Data : ${error} `);
    res.json({
      msg: messages.toastr.SERVER_ERROR,
      error: error,
      status: false,
    });
  }
}

async function getCompanyAddress(req, res) {
  try {
    let company_id = req.params.id;
    if (!company_id) {
      res.json({
        status: false,
        msg: "company_id is required",
      });
    } else {
      savedUser = await dao.getCompanyAddressById({ company_id: company_id });
      if (savedUser) {
        successlog.info(messages.toastr.GET_USER_RECORDS);
        res.json({
          msg: messages.toastr.GET_USER_RECORDS,
          status: true,
          data: savedUser,
        });
      }
    }
  } catch (error) {
    errorlog.error(`Error Occur in Business Watch Save Data : ${error} `);
    res.json({
      msg: messages.toastr.SERVER_ERROR,
      error: error,
      status: false,
    });
  }
}

async function getRecordCompany(req, res) {
  try {
    let userObj, per_page, page, limits, offsetObj, user_id;
    let limit = parseInt(req.query.limit);
    per_page = parseInt(req.query.page);
    userObj = {
      b_w_id: req.params.uuid,
    };
    // if (req.decoded.id) {
    //   user_id = req.decoded.id;
    // }
    if (!userObj.b_w_id) {
      limits = limit ? limit : 5;
      offsetObj = per_page ? per_page * limits : 0;
      savedUser = await dao.findAllCompanyRecords(limits, offsetObj, per_page);
    } else {
      //  console.log(
      //    "happy",{
      //   uuid: userObj.b_w_id,user_id:user_id
      // });
      savedUser = await dao.findOneCompanyRecord(
        {
          uuid: userObj.b_w_id,
        },
        {
          user_id: user_id,
        }
      );
    }
    // console.log("##########",savedUser);
    if (savedUser) {
      successlog.info(messages.toastr.GET_USER_RECORDS);
      res.status(200).json({
        status: true,
        msg: messages.toastr.GET_USER_RECORDS,
        data: savedUser,
      });
    } else {
      errorlog.error(`Error Occur in Get Business Watch Data : ${error} `);
      res.json({
        msg: messages.toastr.S_W_R,
        status: false,
      });
    }
  } catch (error) {
    errorlog.error(`Error Occur in Get Business Watch Data : ${error} `);
    res.json({
      msg: messages.toastr.SERVER_ERROR,
      error: error,
      status: false,
    });
  }
}

async function setCompanyMonitorData(req, res) {
  try {
    let savedUser, checkDataIsExist, response, objData;
    const { user_id, company_id, b_watch_status } = req.query;
    objData = {
      uuid: uuidv4(),
      user_id,
      company_id,
      b_watch_status,
    };
    response = helper.validateCompanyMonitorData(objData);

    if (response.error) {
      res.json({
        status: false,
        msg: response.error.details,
      });
    } else {
      checkDataIsExist = await dao.checkDuplicateBusinessMonitor({
        user_id,
        company_id,
      });
      if (checkDataIsExist.length) {
        res.json({
          msg: messages.toastr.USER_RECORDS_ALREADY_EXIST,
          status: false,
          data: checkDataIsExist,
        });
      } else {
        savedUser = await dao.saveBusinessWatchData(objData);
      }
      if (savedUser) {
        successlog.info(messages.toastr.RECORD_SAVED);
        res.json({
          msg: messages.toastr.RECORD_SAVED,
          status: true,
          data: savedUser,
        });
      }
    }
  } catch (error) {
    errorlog.error(`Error Occur in Business Watch Save Data : ${error} `);
    res.json({
      msg: messages.toastr.SERVER_ERROR,
      error: error,
      status: false,
    });
  }
}

async function businessRecordsMonitor(req, res) {
  try {
    let savedUser;
    const { user_id } = req.query;
    if (!user_id) {
      return res.json({
        msg: "user_id is required",
        status: false,
      });
    } else {
      savedUser = await dao.getBusinessMonitorRecords({
        user_id: user_id,
        b_watch_status: true,
      });
    }
    if (savedUser) {
      successlog.info(messages.toastr.GET_USER_RECORDS);
      res.status(200).json({
        status: true,
        msg: messages.toastr.GET_USER_RECORDS,
        data: savedUser,
      });
    } else {
      errorlog.error(`Error Occur in Get Business Watch Data : ${error} `);
      res.json({
        msg: messages.toastr.S_W_R,
        status: false,
      });
    }
  } catch (error) {
    errorlog.error(`Error Occur in Get Business Watch Data : ${error} `);
    res.json({
      msg: messages.toastr.SERVER_ERROR,
      error: error,
      status: false,
    });
  }
}

async function companyNotes(req, res) {
  try {
    let savedUser, response, objData;

    const { n_company_name, n_text, user_id, company_id } = req.body;

    objData = {
      uuid: uuidv4(),
      n_company_name,
      n_text,
      user_id,
      company_id,
    };

    console.log("Yess............", objData);
    response = helper.validateCompanyNotesData(objData);

    if (response.error) {
      res.json({
        status: false,
        msg: response.error.details,
      });
    } else {
      console.log("Yess............");
      savedUser = await dao.saveComapnyNotes(objData);
      if (savedUser) {
        successlog.info(messages.toastr.RECORD_SAVED);
        res.json({
          msg: messages.toastr.RECORD_SAVED,
          status: true,
          data: savedUser,
        });
      }
    }
  } catch (error) {
    errorlog.error(`Error Occur in Business Watch Save Data : ${error} `);
    res.json({
      msg: messages.toastr.SERVER_ERROR,
      error: error,
      status: false,
    });
  }
}

async function getCompanyNotes(req, res) {
  try {
    //let savedUser, response, objData;
    console.log("Yess............", req.params.id);
    //response = helper.validateCompanyNotesData(objData);
    let user_id = req.params.id;
    if (!user_id) {
      res.json({
        status: false,
        msg: "user_id is required",
      });
    } else {
      console.log("Yess............");
      savedUser = await dao.getCompanyNotes({ user_id: user_id });
      if (savedUser) {
        successlog.info(messages.toastr.GET_USER_RECORDS);
        res.json({
          msg: messages.toastr.GET_USER_RECORDS,
          status: true,
          data: savedUser,
        });
      }
    }
  } catch (error) {
    errorlog.error(`Error Occur in Business Watch Save Data : ${error} `);
    res.json({
      msg: messages.toastr.SERVER_ERROR,
      error: error,
      status: false,
    });
  }
}

async function deleteCompanyNotes(req, res) {
  try {
    let savedUser;
    console.log("Yess............", req.params.id);
    //response = helper.validateCompanyNotesData(objData);
    let { user_id, notes_id } = req.body;
    if (!notes_id) {
      res.json({
        status: false,
        msg: "notes_id is required",
      });
    }
    if (!user_id) {
      res.json({
        status: false,
        msg: "user_id is required",
      });
    } else {
      savedUser = await dao.deleteCompanyNotes({
        user_id: user_id,
        id: notes_id,
      });
      console.log("####", savedUser);
      if (savedUser) {
        successlog.info(messages.toastr.RECORD_SAVED);
        res.json({
          msg: messages.toastr.RECORD_SAVED,
          status: true,
          data: savedUser,
        });
      } else {
        res.json({
          msg: "No result found",
          status: false,
          data: savedUser,
        });
      }
    }
  } catch (error) {
    errorlog.error(`Error Occur in Business Watch Save Data : ${error} `);
    res.json({
      msg: messages.toastr.SERVER_ERROR,
      error: error,
      status: false,
    });
  }
}
//----------------------------Director ------------------------------------------

async function getRecordDirector(req, res) {
  try {
    let userObj, per_page, limits, offsetObj;
    let limit = parseInt(req.query.limit);
    per_page = parseInt(req.query.page);
    userObj = {
      b_w_id: req.params.uuid,
    };
    if (userObj.b_w_id) {
      savedUser = await dao.findOneDirectorRecordById({
        uuid: userObj.b_w_id,
      });
    } else {
      limits = limit ? limit : 5;
      offsetObj = per_page ? per_page * limits : 0;
      savedUser = await dao.findAllDirectorRecord(limits, offsetObj, per_page);
    }
    if (savedUser) {
      successlog.info(messages.toastr.GET_USER_RECORDS);
      res.status(200).json({
        status: true,
        msg: messages.toastr.GET_USER_RECORDS,
        data: savedUser,
      });
    } else {
      errorlog.error(`Error Occur in Get Business Watch Data : ${error} `);
      res.json({
        msg: messages.toastr.S_W_R,
        status: false,
      });
    }
  } catch (error) {
    errorlog.error(`Error Occur in Get Business Watch Data : ${error} `);
    res.json({
      msg: messages.toastr.SERVER_ERROR,
      error: error,
      status: false,
    });
  }
}

async function setDirectorMonitorData(req, res) {
  try {
    let savedUser, checkDataIsExist, response, objData;
    const { user_id, officer_id, d_watch_status } = req.query;
    objData = {
      uuid: uuidv4(),
      user_id,
      officer_id,
      d_watch_status,
    };
    response = helper.validateDirectorMonitorData(objData);

    if (response.error) {
      res.json({
        status: false,
        msg: response.error.details,
      });
    } else {
      checkDataIsExist = await dao.checkDuplicateDirectorMonitor({
        user_id,
        officer_id,
      });
      if (checkDataIsExist.length) {
        res.json({
          msg: messages.toastr.USER_RECORDS_ALREADY_EXIST,
          status: false,
          data: checkDataIsExist,
        });
      } else {
        savedUser = await dao.saveDirectorWatchData(objData);
      }
      if (savedUser) {
        successlog.info(messages.toastr.RECORD_SAVED);
        res.json({
          msg: messages.toastr.RECORD_SAVED,
          status: true,
          data: savedUser,
        });
      }
    }
  } catch (error) {
    errorlog.error(`Error Occur in Business Watch Save Data : ${error} `);
    res.json({
      msg: messages.toastr.SERVER_ERROR,
      error: error,
      status: false,
    });
  }
}

async function directorRecordsMonitor(req, res) {
  try {
    let savedUser;
    const { user_id } = req.query;
    if (!user_id) {
      return res.json({
        msg: "user_id is required",
        status: false,
      });
    } else {
      savedUser = await dao.getDirectorMonitorRecords({
        user_id: user_id,
        d_watch_status: true,
      });
    }
    if (savedUser) {
      successlog.info(messages.toastr.GET_USER_RECORDS);
      res.status(200).json({
        status: true,
        msg: messages.toastr.GET_USER_RECORDS,
        data: savedUser,
      });
    } else {
      errorlog.error(`Error Occur in Get Business Watch Data : ${error} `);
      res.json({
        msg: messages.toastr.S_W_R,
        status: false,
      });
    }
  } catch (error) {
    errorlog.error(`Error Occur in Get Business Watch Data : ${error} `);
    res.json({
      msg: messages.toastr.SERVER_ERROR,
      error: error,
      status: false,
    });
  }
}
//----------------------------comman ------------------------------------------

async function deleteMonitorData(req, res) {
  try {
    let savedUser, checkDataIsExist, response, objData;
    const { uuid, user_id, flag } = req.query;
    objData = {
      uuid,
      user_id,
      flag,
    };
    response = helper.validateDeleteBussinessWatchData(objData);
    if (response.error) {
      res.json({
        status: false,
        msg: response.error.details,
      });
    } else {
      if (flag == "director") {
        checkDataIsExist = await dao.checkDuplicateDirectorMonitor({
          user_id,
          uuid,
        });
        if (checkDataIsExist.length) {
          savedUser = await dao.deleteDirectorWatchData({ user_id, uuid });
        } else {
          res.json({
            msg: "No result found",
            status: false,
            data: checkDataIsExist,
          });
        }
      }
      if (flag == "business") {
        checkDataIsExist = await dao.checkDuplicateBusinessMonitor({
          user_id,
          uuid,
        });
        if (checkDataIsExist.length) {
          savedUser = await dao.deleteBusinessWatchData({ user_id, uuid });
        } else {
          res.json({
            msg: "No result found",
            status: false,
            data: checkDataIsExist,
          });
        }
      }
      if (savedUser) {
        successlog.info(messages.toastr.RECORD_SAVED);
        res.json({
          msg: messages.toastr.RECORD_SAVED,
          status: true,
          data: savedUser,
        });
      }
    }
  } catch (error) {
    errorlog.error(`Error Occur in Business Watch Save Data : ${error} `);
    res.json({
      msg: messages.toastr.SERVER_ERROR,
      error: error,
      status: false,
    });
  }
}

module.exports = {
  businessRecordsMonitor,
  setDirectorMonitorData,
  companyNotes,
  getRecordCompany,
  getRecordDirector,
  setCompanyMonitorData,
  directorRecordsMonitor,
  getCompanyNotes,
  getCompanyAddress,
  deleteMonitorData,
  getCompanyContact,
  getAboutKeyNotes,
  deleteCompanyNotes,
};
