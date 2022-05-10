"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Saved_Searches__chip_values extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Saved_Searches__chip_values.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or Sequelize.UUIDV1
        unique: true,
      },
      chip_value: {
        field: "ss_cv_chip_value",
        type: DataTypes.STRING,
      },
      ss_cd_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "saved_searches_chip_values",
    }
  );
  return Saved_Searches__chip_values;
};
