'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plan_Details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Plan_Details.init({
    uuid:  {
      type: DataTypes.UUID,
      defaultValue: sequelize.UUIDV4, // Or Sequelize.UUIDV1
      unique: true,
    },
    p_name: DataTypes.STRING,
    p_limit_company_monitor: DataTypes.INTEGER,
    p_limit_director_monitor: DataTypes.INTEGER,
    p_limit_company_reports: DataTypes.INTEGER,
    p_limit_director_reports: DataTypes.INTEGER,
    p_limit_credit_reports: DataTypes.INTEGER,
    p_limit_results_downloads_exports: DataTypes.INTEGER,
    p_limit_chargeable_title_reports: DataTypes.INTEGER,
    p_limit_land_registry_records: DataTypes.INTEGER,
    p_limit_corporate_land_records: DataTypes.INTEGER,
    p_level: DataTypes.INTEGER,
    p_does_it_include_feautes_earlier_levels: DataTypes.BOOLEAN,
    p_amount: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'plan_details',
  });
  return Plan_Details;
};