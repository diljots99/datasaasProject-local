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
      Saved_searches.belongsTo(models.User, {
        foreignKey: "user_id",
      });
    }
  }
  Saved_searches.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or Sequelize.UUIDV1
        unique: true,
      },
      fliter_name: { field: "s_fliter_name", type: DataTypes.STRING },
      search_type: {field:"s_search_type", type:DataTypes.STRING},
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "saved_search",
    }
  );
  return Saved_searches;
};
