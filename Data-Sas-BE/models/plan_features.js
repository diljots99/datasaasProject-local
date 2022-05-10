'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plan_Features extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Plan_Features.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Or Sequelize.UUIDV1
      unique: true,
    },
    plan_details_id: DataTypes.INTEGER,
    feature_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'plan_features',
  });
  return Plan_Features;
};