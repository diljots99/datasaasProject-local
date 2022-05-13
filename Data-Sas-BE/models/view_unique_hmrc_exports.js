"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    const View_unique_hmrc_exports = sequelize.define('View_unique_hmrc_exports', {
        hmrc_code: DataTypes.STRING,
        chn: DataTypes.STRING,
        code_description: DataTypes.STRING,
    }, {
      treatAsView: true,
      viewDefinition: `
      CREATE VIEW View_unique_hmrc_exports AS
      select distinct hmrc_code1 as hmrc_code ,chn , hmrc_codes.code_description from (
        SELECT hmrc_code1 ,chn FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code2 ,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code3,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code4,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code5,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code6,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code7,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code8,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code9,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code10,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code11,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code12,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code13,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code14,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code15,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code16,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code17,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code18,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code19,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code20,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code21,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code22,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code23,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code24,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code25,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code26,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code27,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code28,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code29,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code30,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code31,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code32,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code33,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code34,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code35,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code36,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code37,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code38,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code39,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code40,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code41,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code42,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code43,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code44,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code45,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code46,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code47,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code48,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code49,chn  FROM dba_hmrc_export_gens 
        UNION ALL
        SELECT hmrc_code50,chn  FROM dba_hmrc_export_gens 
        ) as hmrc  inner join hmrc_codes  on hmrc.hmrc_code1 = hmrc_codes.hmrc_code 
      `
    });
   
    return View_unique_hmrc_exports;
  };