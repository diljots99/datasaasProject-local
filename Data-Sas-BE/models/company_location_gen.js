"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class company_location_gen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here


    }
  }
  company_location_gen.init(
    {
      company_id: DataTypes.INTEGER,
      dbl_loc_id: DataTypes.INTEGER,
      chn: DataTypes.STRING,
      dbe_id: DataTypes.INTEGER,
      address_type: DataTypes.STRING,
      location_type: DataTypes.STRING,
      premise_type: DataTypes.STRING,
      address_line: DataTypes.STRING,
      address_town: DataTypes.STRING,
      company_address_country: DataTypes.STRING,
      personal_address_country: DataTypes.STRING,
      address_post_code: DataTypes.STRING,
      address_post_code_trim: DataTypes.STRING,
      care_of: DataTypes.STRING,
      po_box: DataTypes.STRING,
      address_region: DataTypes.STRING,
      address_state: DataTypes.STRING,
      address_county_province: DataTypes.STRING,
      updated: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "company_location_gen",
    }
  );
  return company_location_gen;
};
