'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Saved_List_To_Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Saved_List_To_Company.init({
    uuid: DataTypes.STRING,
    sl_id: DataTypes.INTEGER,
    c_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'saved_list_to_company',
  });
  return Saved_List_To_Company;
};