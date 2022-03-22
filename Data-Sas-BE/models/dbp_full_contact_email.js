'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dbp_full_contact_email extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  dbp_full_contact_email.init({
    uuid: DataTypes.STRING,
    dbpf_id: DataTypes.STRING,
    full_name: DataTypes.STRING,
    company_id: DataTypes.INTEGER,
    chn: DataTypes.STRING,
    dbe_id: DataTypes.INTEGER,
    dbp_id: DataTypes.STRING,
    dbp_officers_id: DataTypes.STRING,
    dbp_psc_id: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dbp_full_contact_email',
  });
  return dbp_full_contact_email;
};