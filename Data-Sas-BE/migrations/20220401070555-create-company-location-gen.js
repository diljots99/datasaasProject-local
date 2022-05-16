'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('company_location_gens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_id: {
        type: Sequelize.INTEGER,
        foreignKey:true,
        references: { model: 'compines_officals', key: 'id' }
      },
      dbl_loc_id: {
        type: Sequelize.INTEGER
      },
      chn: {
        type: Sequelize.STRING,
        foreignKey:true,
        references: { model: 'compines_officals', key: 'chn' }
      },
      dbe_id: {
        type: Sequelize.INTEGER,
        foreignKey:true,
        references: { model: 'compines_officals', key: 'dbe_id' }
      },
      address_type: {
        type: Sequelize.STRING
      },
      location_type: {
        type: Sequelize.STRING
      },
      premise_type: {
        type: Sequelize.STRING
      },
      address_line: {
        type: Sequelize.STRING
      },
      address_town: {
        type: Sequelize.STRING
      },
      company_address_country: {
        type: Sequelize.STRING
      },
      personal_address_country: {
        type: Sequelize.STRING
      },
      address_post_code: {
        type: Sequelize.STRING
      },
      address_post_code_trim: {
        type: Sequelize.STRING
      },
      care_of: {
        type: Sequelize.STRING
      },
      po_box: {
        type: Sequelize.STRING
      },
      address_region: {
        type: Sequelize.STRING
      },
      address_state: {
        type: Sequelize.STRING
      },
      address_county_province: {
        type: Sequelize.STRING
      },
      updated:{
        type: Sequelize.DATE        
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
    await queryInterface.dropTable('company_location_gens');
  }
};