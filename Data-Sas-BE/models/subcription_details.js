"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Subcription_Details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Subcription_Details.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or Sequelize.UUIDV1
        unique: true,
      },
      user_id: DataTypes.INTEGER,
      plan_details_id: DataTypes.INTEGER,
      sub_sr_no: DataTypes.STRING,
      sub_limit_details: DataTypes.STRING,
      sub_subscriptions_details: DataTypes.STRING,
      limit_availabile_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "subcription_details",
    }
  );
  return Subcription_Details;
};
