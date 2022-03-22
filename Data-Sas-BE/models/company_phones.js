"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company_Phones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.compines_offical.belongsTo(Company_Phones, {
        foreignKey: "id",
      });
      models.compines_offical.belongsTo(Company_Phones, {
        foreignKey: "chn",
      });
      models.compines_offical.belongsTo(Company_Phones, {
        foreignKey: "dbe_id",
      });
    }
  }
  Company_Phones.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4, // Or Sequelize.UUIDV1
        unique: true,
      },
      company_id: DataTypes.INTEGER,
      chn: DataTypes.STRING,
      dbe_id: DataTypes.INTEGER,
      email: DataTypes.STRING,
      business_name: DataTypes.STRING,
      postcode_trim: DataTypes.STRING,
      city: DataTypes.STRING,
      country: DataTypes.STRING,
      phone: DataTypes.STRING,
      company_tps: DataTypes.STRING,
      company_ctps: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "company_phones",
    }
  );
  return Company_Phones;
};
