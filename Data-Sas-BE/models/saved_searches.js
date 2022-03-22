"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Saved_searches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Saved_searches.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4, // Or Sequelize.UUIDV1
        unique: true,
      },
      s_fliter_name: DataTypes.STRING,
      s_search_type: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "saved_search",
    }
  );
  return Saved_searches;
};
