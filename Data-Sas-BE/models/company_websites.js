"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company_Websites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.compines_offical.belongsTo(Company_Websites, {
        foreignKey: "id",
      });

      models.compines_offical.belongsTo(Company_Websites, {
        foreignKey: "chn",
      });

      models.compines_offical.belongsTo(Company_Websites, {
        foreignKey: "dbe_id",
      });
    }
  }
  Company_Websites.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or Sequelize.UUIDV1
        unique: true,
      },
      company_id: DataTypes.INTEGER,
      chn: DataTypes.STRING,
      dbe_id: DataTypes.INTEGER,
      website_url: DataTypes.STRING,
      old_website_url: DataTypes.STRING,
      web_from_email: DataTypes.STRING,
      business_name: DataTypes.STRING,
      postcode_trim: DataTypes.STRING,
      city: DataTypes.STRING,
      country: DataTypes.STRING,
      status_code: DataTypes.STRING,
      scraped_on: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "company_websites",
    }
  );
  return Company_Websites;
};
