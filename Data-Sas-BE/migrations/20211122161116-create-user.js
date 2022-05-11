'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
        unique:true
      },
      u_first_name: {
        type: Sequelize.STRING
      },
      u_last_name: {
        type: Sequelize.STRING
      },
      u_country_code: {
        type: Sequelize.STRING
      },
      u_phone_no: {
        type: Sequelize.INTEGER
      },
      u_company_name: {
        type: Sequelize.STRING
      },
      u_company_no: {
        type: Sequelize.STRING
      },
      u_city: {
        type: Sequelize.STRING
      },
      u_email: {
        type: Sequelize.STRING
      },
      u_country: {
        type: Sequelize.STRING
      },
      u_address: {
        type: Sequelize.STRING
      },
      u_postal_code: {
        type: Sequelize.INTEGER
      },
      u_email_option: {
        type: Sequelize.STRING
      },
      u_password: {
        type: Sequelize.STRING
      },
      u_status: {
        type: Sequelize.BOOLEAN
      },
      u_role: {
        type: Sequelize.INTEGER
      },
      u_last_login: {
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
    await queryInterface.dropTable('users');
  }
};