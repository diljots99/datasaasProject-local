"use strict";
const sequelizePaginate = require('sequelize-paginate')

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Officer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      Officer.hasMany(models.director_watch,{
        foreignKey: "officer_id",
      });
      
      // Officer.belongsTo(models.compines_offical, {
      //   foreignKey: "company_id",
      // });
     
      Officer.belongsTo(models.compines_offical, {    
        foreignKey: "chn",
      });
      // models.compines_offical.belongsTo(Officer, {
      //   foreignKey: "id",
      // });
      // models.compines_offical.belongsTo(Officer, {
      //   foreignKey: "chn",
      // });
      // models.compines_offical.belongsTo(Officer, {
      //   foreignKey: "dbe_id",
      // });
      // models.Officer.b
    }
  }
  Officer.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or Sequelize.UUIDV1
        unique: true,
      },
      company_id: DataTypes.INTEGER,
      chn: DataTypes.STRING,
      dbe_id: DataTypes.INTEGER,
      company_house_number: DataTypes.STRING,
      business_name: DataTypes.STRING,
      date_of_birth_year: DataTypes.STRING,
      date_of_birth_month: DataTypes.STRING,
      name: DataTypes.STRING,
      fullname: DataTypes.STRING,
      title: DataTypes.STRING,
      title2: DataTypes.STRING,
      firstname: DataTypes.STRING,
      middlename: DataTypes.STRING,
      lastname: DataTypes.STRING,
      country_of_residence: DataTypes.STRING,
      officer_role: DataTypes.STRING,
      postal_code: DataTypes.STRING,
      address_line_1: DataTypes.STRING,
      premises: DataTypes.STRING,
      country: DataTypes.STRING,
      region: DataTypes.STRING,
      locality: DataTypes.STRING,
      occupation: DataTypes.STRING,
      resigned_on: DataTypes.DATE,
      nationality: DataTypes.STRING,
      appointed_on: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "officer",
    }
  );
  sequelizePaginate.paginate(Officer)

  return Officer;
};
