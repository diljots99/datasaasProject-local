"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Director_Watch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Director_Watch.belongsTo(models.officer, {
        foreignKey: "officer_id",
      });
    }
  }
  Director_Watch.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or Sequelize.UUIDV1
        unique: true,
      },
      user_id: DataTypes.INTEGER,
      officer_id: DataTypes.INTEGER,
      d_watch_status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "director_watch",
    }
  );
  return Director_Watch;
};
