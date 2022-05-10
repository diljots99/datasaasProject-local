'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('plan_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4, // Or Sequelize.UUIDV1
        unique:true
      },
      p_name: {
        type: Sequelize.STRING
      },
      p_limit_company_monitor: {
        type: Sequelize.INTEGER
      },
      p_limit_director_monitor: {
        type: Sequelize.INTEGER
      },
      p_limit_company_reports: {
        type: Sequelize.INTEGER
      },
      p_limit_director_reports: {
        type: Sequelize.INTEGER
      },
      p_limit_credit_reports: {
        type: Sequelize.INTEGER
      },
      p_limit_results_downloads_exports: {
        type: Sequelize.INTEGER
      },
      p_limit_chargeable_title_reports: {
        type: Sequelize.INTEGER
      },
      p_limit_land_registry_records: {
        type: Sequelize.INTEGER
      },
      p_limit_corporate_land_records: {
        type: Sequelize.INTEGER
      },
      p_level: {
        type: Sequelize.INTEGER
      },
      p_does_it_include_feautes_earlier_levels: {
        type: Sequelize.BOOLEAN
      },
      p_amount: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('plan_details');
  }
};