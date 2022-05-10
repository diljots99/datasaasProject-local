'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('limits_availables', {
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
      la_limit_company_monitor_avaiable: {
        type: Sequelize.INTEGER
      },
      la_limit_director_monitor_available: {
        type: Sequelize.INTEGER
      },
      la_limit_company_reports_available: {
        type: Sequelize.INTEGER
      },
      la_limit_director_reports_available: {
        type: Sequelize.INTEGER
      },
      la_limit_credit_reports_available: {
        type: Sequelize.INTEGER
      },
      la_limit_results_downloads_exports_available: {
        type: Sequelize.INTEGER
      },
      la_limit_chargeable_title_reports_available: {
        type: Sequelize.INTEGER
      },
      la_limit_land_registry_records_available: {
        type: Sequelize.INTEGER
      },
      la_limit_corporate_land_records_available: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('limits_availables');
  }
};