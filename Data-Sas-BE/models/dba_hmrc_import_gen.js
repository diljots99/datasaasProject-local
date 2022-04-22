'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dba_hmrc_import_gen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  dba_hmrc_import_gen.init({
    company_id: DataTypes.INTEGER,
    dba_hmrc_imp_id: DataTypes.INTEGER,
    chn: DataTypes.STRING,
    dbe_id: DataTypes.INTEGER,
    hmrc_date: DataTypes.STRING,
    hmrc_date2: DataTypes.DATE,
    number: DataTypes.INTEGER,
    company_name: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    address3: DataTypes.STRING,
    address4: DataTypes.STRING,
    address5: DataTypes.STRING,
    hmrc_postcode: DataTypes.STRING,
    hmrc_code1: DataTypes.STRING,
    hmrc_code2: DataTypes.STRING,
    hmrc_code3: DataTypes.STRING,
    hmrc_code4: DataTypes.STRING,
    hmrc_code5: DataTypes.STRING,
    hmrc_code6: DataTypes.STRING,
    hmrc_code7: DataTypes.STRING,
    hmrc_code8: DataTypes.STRING,
    hmrc_code9: DataTypes.STRING,
    hmrc_code10: DataTypes.STRING,
    hmrc_code11: DataTypes.STRING,
    hmrc_code12: DataTypes.STRING,
    hmrc_code13: DataTypes.STRING,
    hmrc_code14: DataTypes.STRING,
    hmrc_code15: DataTypes.STRING,
    hmrc_code16: DataTypes.STRING,
    hmrc_code17: DataTypes.STRING,
    hmrc_code18: DataTypes.STRING,
    hmrc_code19: DataTypes.STRING,
    hmrc_code20: DataTypes.STRING,
    hmrc_code21: DataTypes.STRING,
    hmrc_code22: DataTypes.STRING,
    hmrc_code23: DataTypes.STRING,
    hmrc_code24: DataTypes.STRING,
    hmrc_code25: DataTypes.STRING,
    hmrc_code26: DataTypes.STRING,
    hmrc_code27: DataTypes.STRING,
    hmrc_code28: DataTypes.STRING,
    hmrc_code29: DataTypes.STRING,
    hmrc_code30: DataTypes.STRING,
    hmrc_code31: DataTypes.STRING,
    hmrc_code32: DataTypes.STRING,
    hmrc_code33: DataTypes.STRING,
    hmrc_code34: DataTypes.STRING,
    hmrc_code35: DataTypes.STRING,
    hmrc_code36: DataTypes.STRING,
    hmrc_code37: DataTypes.STRING,
    hmrc_code38: DataTypes.STRING,
    hmrc_code39: DataTypes.STRING,
    hmrc_code40: DataTypes.STRING,
    hmrc_code41: DataTypes.STRING,
    hmrc_code42: DataTypes.STRING,
    hmrc_code43: DataTypes.STRING,
    hmrc_code44: DataTypes.STRING,
    hmrc_code45: DataTypes.STRING,
    hmrc_code46: DataTypes.STRING,
    hmrc_code47: DataTypes.STRING,
    hmrc_code48: DataTypes.STRING,
    hmrc_code49: DataTypes.STRING,
    hmrc_code50: DataTypes.STRING,
    check: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'dba_hmrc_import_gen',
  });
  return dba_hmrc_import_gen;
};