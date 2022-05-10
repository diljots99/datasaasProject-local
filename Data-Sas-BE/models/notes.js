"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Notes.belongsTo(models.compines_offical, {
        foreignKey: "company_id",
      });
    }
  }
  Notes.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or Sequelize.UUIDV1
        unique: true,
      },
      n_company_name: DataTypes.STRING,
      n_text: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      company_id: DataTypes.INTEGER,
      officer_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "notes",
    }
  );
  return Notes;
};
