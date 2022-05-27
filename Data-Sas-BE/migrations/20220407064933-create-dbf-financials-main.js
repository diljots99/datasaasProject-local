'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dbf_financials_mains', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dbf_id: {
        type: Sequelize.INTEGER
      },
      company_id: {
        type: Sequelize.INTEGER,
        foreignKey:true,
        references: { model: 'compines_officals', key: 'id' }
      },
      chn: {
        type: Sequelize.STRING,
        foreignKey:true,
        references: { model: 'compines_officals', key: 'chn' }
      },
      file_name: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      value: {
        type: Sequelize.DECIMAL
      },
      value_name: {
        type: Sequelize.STRING
      },
      filing_year: {
        type: Sequelize.INTEGER
      },
      correctdate2: {
        type: Sequelize.DATE
      },
      financial_year: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dbf_financials_mains');
  }
};