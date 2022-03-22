'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Saved_Searches__chip_vaulues extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Saved_Searches__chip_vaulues.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: sequelize.UUIDV4, // Or Sequelize.UUIDV1
      unique: true,
    }, 
    ss_cv_chip_value: DataTypes.STRING,
    ss_cd_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'saved_searches_chip_values',
  });
  return Saved_Searches__chip_vaulues;
};