"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Business_Watch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Business_Watch.belongsTo(models.compines_offical, {
        foreignKey: "company_id",
      });
    }
  }
  Business_Watch.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or Sequelize.UUIDV1
        unique: true,
      },
      company_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      b_watch_status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "business_watch",
    }
  );
  return Business_Watch;
};
