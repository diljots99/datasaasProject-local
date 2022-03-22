'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class saved_searches__chip_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  saved_searches__chip_data.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: sequelize.UUIDV4, // Or Sequelize.UUIDV1
      unique: true,
    }, 
    ss_cd_chip_group: DataTypes.STRING,
    ss_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'saved_searches_chip_data',
  });
  return saved_searches__chip_data;
};