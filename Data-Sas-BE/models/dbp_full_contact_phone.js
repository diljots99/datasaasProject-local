'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dbp_full_contact_phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  dbp_full_contact_phone.init({
    uuid: DataTypes.STRING,
    dbpf_id: DataTypes.STRING,
    company_id: DataTypes.INTEGER,
    chn: DataTypes.STRING,
    dbe_id: DataTypes.INTEGER,
    dbp_id: DataTypes.STRING,
    dbp_officers_id: DataTypes.STRING,
    dbp_psc_id: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dbp_full_contact_phone',
  });
  return dbp_full_contact_phone;
};