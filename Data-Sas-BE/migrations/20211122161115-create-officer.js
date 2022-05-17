'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('officers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
        unique:true,
        
      },
      company_id: {
        type: Sequelize.INTEGER,
        foreignKey:true,
        references: { model: 'compines_officals', key: 'id' }
      },
      chn: {
        type: Sequelize.STRING,
        // foreignKey:true,
        // references: { model: 'compines_offical', key: 'chn' }
      },
      dbe_id: {
        type: Sequelize.INTEGER,
        // foreignKey:true,
        // references: { model: 'compines_offical', key: 'dbe_id' }
      },
      company_house_number: {
        type: Sequelize.STRING
      },
      business_name: {
        type: Sequelize.STRING
      },
      date_of_birth_year: {
        type: Sequelize.STRING
      },
      date_of_birth_month: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      fullname: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      title2: {
        type: Sequelize.STRING
      },
      firstname: {
        type: Sequelize.STRING
      },
      middlename: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      country_of_residence: {
        type: Sequelize.STRING
      },
      officer_role: {
        type: Sequelize.STRING
      },
      postal_code: {
        type: Sequelize.STRING
      },
      address_line_1: {
        type: Sequelize.STRING
      },
      premises: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      locality: {
        type: Sequelize.STRING
      },
      occupation: {
        type: Sequelize.STRING
      },
      resigned_on: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      appointed_on: {
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
    await queryInterface.dropTable('officers');
  }
};