"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Limits_Available extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Limits_Available.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or Sequelize.UUIDV1
        unique: true,
      },
      la_limit_company_monitor_avaiable: DataTypes.INTEGER,
      la_limit_director_monitor_available: DataTypes.INTEGER,
      la_limit_company_reports_available: DataTypes.INTEGER,
      la_limit_director_reports_available: DataTypes.INTEGER,
      la_limit_credit_reports_available: DataTypes.INTEGER,
      la_limit_results_downloads_exports_available: DataTypes.INTEGER,
      la_limit_chargeable_title_reports_available: DataTypes.INTEGER,
      la_limit_land_registry_records_available: DataTypes.INTEGER,
      la_limit_corporate_land_records_available: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "limits_available",
    }
  );
  return Limits_Available;
};
