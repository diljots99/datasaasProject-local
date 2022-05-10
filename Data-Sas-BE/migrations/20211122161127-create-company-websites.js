'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('company_websites', {
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
      company_id: {
        type: Sequelize.INTEGER,
        foreignKey:true,
        references: { model: 'compines_offical', key: 'id' }
      },
      chn: {
        type: Sequelize.STRING,
        foreignKey:true,
        // references: { model: 'compines_offical', key: 'chn' }
      },
      dbe_id: {
        type: Sequelize.INTEGER,
        foreignKey:true,
        // references: { model: 'compines_offical', key: 'dbe_id' }

      },
      website_url: {
        type: Sequelize.STRING
      },
      old_website_url: {
        type: Sequelize.STRING
      },
      web_from_email: {
        type: Sequelize.STRING
      },
      business_name: {
        type: Sequelize.STRING
      },
      postcode_trim: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      status_code: {
        type: Sequelize.STRING
      },
      scraped_on: {
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
    await queryInterface.dropTable('company_websites');
  }
};