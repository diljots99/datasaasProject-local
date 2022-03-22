"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Saved_list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Saved_list.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4, // Or Sequelize.UUIDV1
        unique: true,
      },
      sl_list_name: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      company_id: DataTypes.INTEGER,
      officer_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "saved_list",
    }
  );
  return Saved_list;
};
