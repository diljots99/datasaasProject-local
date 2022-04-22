const express = require("express");
const router = express.Router();
const businessWatchController = require("../controller/business-watch");
const JWT = require("../utils/auth");

//--------------------------------------- Company-records ---------------------------------------
router.get("/company-records", businessWatchController.getRecordCompany);
router.get("/company-records-by-uuid/:uuid", businessWatchController.getRecordCompany);
router.post("/company-monitor",businessWatchController.setCompanyMonitorData);
router.get("/company-monitor-records", businessWatchController.businessRecordsMonitor);

//Notes ...
router.post("/company-notes", businessWatchController.companyNotes);
router.get("/company-notes/:id", businessWatchController.getCompanyNotes);
router.delete("/company-notes", businessWatchController.deleteCompanyNotes);

//Overview
router.get("/company-addr ess/:id", businessWatchController.getCompanyAddress);
router.get("/company-contact/:id", businessWatchController.getCompanyContact);
router.get("/company-hmrc-import/:id", businessWatchController.getAboutKeyNotes);

//--------------------------------------- Director-records ---------------------------------------
router.get("/director-records",  businessWatchController.getRecordDirector);
router.get("/director-records-by-id/:uuid",businessWatchController.getRecordDirector);
router.post("/director-monitor",businessWatchController.setDirectorMonitorData);
router.get("/director-records-monitor",businessWatchController.directorRecordsMonitor);

//--------------------------------------- Comman ---------------------------------------
router.delete("/delete-watch-record",businessWatchController.deleteMonitorData);

module.exports = router;
