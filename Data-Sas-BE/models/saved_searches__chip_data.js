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
      models.saved_search.hasMany(saved_searches__chip_data,{
        foreignKey: "ss_id",
        as: "chip_data"
      })
      saved_searches__chip_data.hasMany(models.saved_searches_chip_values,{
        foreignKey:"ss_cd_id",
        as: "chip_values"

      })
      console.log(models)
    }
  };
  saved_searches__chip_data.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Or Sequelize.UUIDV1
      unique: true,
    }, 
    chip_group:{ 
      field: "ss_cd_chip_group",
      type:DataTypes.STRING
    },
    ss_id: {
     type: DataTypes.INTEGER,

  }
}, {
    sequelize,
    modelName: 'saved_searches_chip_data',
  });
  return saved_searches__chip_data;
};