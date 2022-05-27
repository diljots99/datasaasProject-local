'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dbf_financials_main extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // dbf_financials_main.belongsTo(models.compines_offical,{
      //   foreignKey: "chn",
      // });
      dbf_financials_main.belongsTo(models.compines_offical,{
        foreignKey: { name: 'chn', allowNull: false },
        sourceKey:'chn',
        targetKey:'chn'
      })
      models.compines_offical.hasMany(dbf_financials_main,{
        foreignKey: { name: 'chn', allowNull: false },
        sourceKey:'chn',
        targetKey:'chn'
      })
    }
  };
  dbf_financials_main.init({
    dbf_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
    chn: DataTypes.STRING,
    file_name: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    value: DataTypes.DECIMAL,
    value_name: DataTypes.STRING,
    filing_year: DataTypes.INTEGER,
    correctdate2: DataTypes.DATE,
    financial_year: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'dbf_financials_main',
  });
  return dbf_financials_main;
};