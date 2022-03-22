"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company_Postcodes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.compines_offical.belongsTo(Company_Postcodes, {
      //   foreignKey: "id",
      // });

      // models.compines_offical.belongsTo(Company_Postcodes, {
      //   foreignKey: "dbe_id",
      // });

      Company_Postcodes.belongsTo(models.compines_offical,{
          foreignKey: "chn",
        });

      // models.compines_offical.belongsTo(Company_Postcodes, {
      //   foreignKey: "chn",
      // });

      // models.compines_offical.belongsTo(Company_Postcodes, {
      //   foreignKey: "dbe_id",
      // });
    }
  }
  Company_Postcodes.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4, // Or Sequelize.UUIDV1
        unique: true,
      },
      company_id: DataTypes.INTEGER,
      chn: DataTypes.STRING,
      dbe_id: DataTypes.INTEGER,
      business_name: DataTypes.STRING,
      postcode: DataTypes.STRING,
      postcode_trim: DataTypes.STRING,
      city: DataTypes.STRING,
      country: DataTypes.STRING,
      territory: DataTypes.STRING,
      region: DataTypes.STRING,
      county: DataTypes.STRING,
      uk_business: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "company_postcodes",
    }
  );
  return Company_Postcodes;
};
