const model = require("../../models");

//<------------------------==================(compines_offical)Business Watch====================----------------------->
function saveBusinessWatchData(data) {
  return model.business_watch.create(data);
}

function saveComapnyNotes(data) {
  return model.notes.create(data);
}

function getCompanyNotes(params) {
  return model.notes.findAll({where:params});
}

async function findAllCompanyRecords(limits, offset, per_page) {
  let allData;
  // allData = await model.compines_offical.findAndCountAll({
  //   // offset: offset,
  //   // limit: limits,
  //   // order: [["id", "DESC"]],
  // });
  // const totalPages = Math.ceil(allData.count / limits);
  // return {
  //   totalItems: allData.count,
  //   totalPages: totalPages,
  //   limit: limits,
  //   currentPageNumber: per_page + 1,
  //   currentPageSize: per_page,
  //   data: allData,
  // };

  //allData = 
  
 return await model.compines_offical.findAll({  include: [{
    model: model.company_postcodes
  },
    {
      model: model.business_watch,
     //   where:user_id
    },
  ],});

 //console.log("allData.business_watches.length", allData.business_watches);
  if(allData.length){

// for(let j = 0; j < allData.length; j++){
// }
allData.forEach(allDatas => allDatas.business_watches.forEach(ae=>{
 
  if(!ae.b_watch_status){
 //   console.log("-----------",ae)
  }
}
  ))
  // for(let i = 0; i < allData[j].business_watches.length; i++) {
  //   console.log("companyList", allData.business_watches.length[i]);

  // }
  }



}

function findOneCompanyRecord(data,user_id) {
  return model.compines_offical.findOne({
    where: data,
    include: [{
      model: model.company_postcodes
    },
      {
        model: model.business_watch,
       //   where:user_id
      },
      {
        model: model.officer,
       //   where:user_id
      },
      {
        model: model.notes,
       //   where:user_id
      },
    ],
  });
}

function checkDuplicateBusinessMonitor(params) {
  return model.business_watch.findAll({ where: params });
}

function deleteBusinessWatchData(params) {
  return model.business_watch.destroy({ where: params });
}

function getBusinessMonitorRecords(params) {
  return model.compines_offical.findAll({
    include: [
      {
        model: model.business_watch,
        where: params,
      },
    ],
  });
}

function getCompanyNoteRecords(params) {
  return model.notes.findAll({
        where: params
  });
}

//<------------------------==================(officer)Director Watch====================----------------------->
function saveDirectorWatchData(data) {
  return model.director_watch.create(data);
}

async function findAllDirectorRecord(limits, offset, per_page) {
  // let allData;
  // allData = await model.officer.findAndCountAll({
  //   offset: offset,
  //   limit: limits,
  //   order: [["id", "DESC"]],
  // });
  // const totalPages = Math.ceil(allData.count / limits);
  // return {
  //   totalItems: allData.count,
  //   totalPages: totalPages,
  //   limit: limits,
  //   currentPageNumber: per_page + 1,
  //   currentPageSize: per_page,
  //   data: allData,
  // };
  return  model.officer.findAll({ include: [
    {
      model: model.director_watch,
    },
  ]});
}
function findOneDirectorRecordById(data) {
  return model.officer.findOne({ where: data, 
    include: [
    {
      model: model.director_watch,
    },
    {
      model: model.compines_offical,
     //   where:user_id
    },
  ]}
  );
}

function checkDuplicateDirectorMonitor(data) {
  return model.director_watch.findAll({ where: data });
}

function deleteDirectorWatchData(params) {
  return model.director_watch.destroy({ where: params });
}

function getDirectorMonitorRecords(params) {
  return model.officer.findAll({
    include: [
      {
        model: model.director_watch,
        where: params,
      },
    ],
  });
}

function deleteCompanyNotes(params){
  return model.notes.destroy({
    where: params
});
}

module.exports = {
  saveBusinessWatchData,
  findOneCompanyRecord,
  findAllCompanyRecords,
  getCompanyNoteRecords,
  checkDuplicateDirectorMonitor,
  saveDirectorWatchData,
  findAllDirectorRecord,
  checkDuplicateBusinessMonitor,
  findOneDirectorRecordById,
  saveComapnyNotes,
  getBusinessMonitorRecords,
  deleteBusinessWatchData,
  getDirectorMonitorRecords,
  deleteDirectorWatchData,
  getCompanyNotes,
  deleteCompanyNotes
};
