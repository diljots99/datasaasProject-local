"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AvailableBusinessFilter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AvailableBusinessFilter.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or Sequelize.UUIDV1
        unique: true,
      },
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      type: DataTypes.ENUM([
        "Free Text Search",
        "Dropdown Multi Choice",
        "Dropdown Single Choice",
        "MinMax value",
      ]),
    },
    {
      sequelize,
      modelName: "available_business_filters",
    }
  );
  return AvailableBusinessFilter;
};
