"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class dbp_psc_gen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dbp_psc_gen.init(
    {
      uuid: DataTypes.STRING,
      company_id: DataTypes.INTEGER,
      chn: DataTypes.STRING,
      dbe_id: DataTypes.INTEGER,
      psc_id: DataTypes.INTEGER,
      company_number: DataTypes.STRING,
      premises: DataTypes.STRING,
      adress_line_1: DataTypes.STRING,
      address_line_2: DataTypes.STRING,
      care_od: DataTypes.STRING,
      country: DataTypes.STRING,
      locality: DataTypes.STRING,
      postal_code: DataTypes.STRING,
      region: DataTypes.STRING,
      po_box: DataTypes.STRING,
      ceased_on: DataTypes.STRING,
      country_of_residence: DataTypes.STRING,
      month_of_birth: DataTypes.STRING,
      year_of_birth: DataTypes.STRING,
      etag: DataTypes.STRING,
      kind: DataTypes.STRING,
      links_self: DataTypes.STRING,
      country_registered: DataTypes.STRING,
      legal_authority: DataTypes.STRING,
      legal_form: DataTypes.STRING,
      place_registred: DataTypes.STRING,
      registration_number: DataTypes.STRING,
      name: DataTypes.STRING,
      name_without_line: DataTypes.STRING,
      title: DataTypes.STRING,
      forename: DataTypes.STRING,
      middle_name: DataTypes.STRING,
      surname: DataTypes.STRING,
      nationality: DataTypes.STRING,
      nature_of_control: DataTypes.STRING,
      notified_on: DataTypes.STRING,
      ceased: DataTypes.STRING,
      restrictions_notice_withdrawal_reason: DataTypes.STRING,
      linked_psc_name: DataTypes.STRING,
      statement: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "dbp_psc_gen",
    }
  );
  return dbp_psc_gen;
};
