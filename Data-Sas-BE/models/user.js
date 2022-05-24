"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or Sequelize.UUIDV1
        unique: true,
      },
      u_first_name: DataTypes.STRING,
      u_last_name: DataTypes.STRING,
      u_country_code: DataTypes.STRING,
      u_phone_no: DataTypes.INTEGER,
      u_company_name: DataTypes.STRING,
      u_company_no: DataTypes.STRING,
      u_county: DataTypes.STRING,
      u_city: DataTypes.STRING,
      u_email: DataTypes.STRING,
      u_country: DataTypes.STRING,
      u_address: DataTypes.STRING,
      u_postal_code: DataTypes.INTEGER,
      u_email_option: DataTypes.STRING,
      u_password: DataTypes.STRING,
      u_status: DataTypes.BOOLEAN,
      u_role: DataTypes.INTEGER,
      u_last_login: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users"
    }
  );
  return User;
};
