'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dbp_psc_gens', {
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
      company_id: {
        type: Sequelize.INTEGER,
        foreignKey:true,
        references: { model: 'compines_offical', key: 'id' }
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
      psc_id: {
        type: Sequelize.INTEGER,
        unique:true,
      },
      company_number: {
        type: Sequelize.STRING
      },
      premises: {
        type: Sequelize.STRING
      },
      adress_line_1: {
        type: Sequelize.STRING
      },
      address_line_2: {
        type: Sequelize.STRING
      },
      care_od: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      locality: {
        type: Sequelize.STRING
      },
      postal_code: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      po_box: {
        type: Sequelize.STRING
      },
      ceased_on: {
        type: Sequelize.STRING
      },
      country_of_residence: {
        type: Sequelize.STRING
      },
      month_of_birth: {
        type: Sequelize.STRING
      },
      year_of_birth: {
        type: Sequelize.STRING
      },
      etag: {
        type: Sequelize.STRING
      },
      kind: {
        type: Sequelize.STRING
      },
      links_self: {
        type: Sequelize.STRING
      },
      country_registered: {
        type: Sequelize.STRING
      },
      legal_authority: {
        type: Sequelize.STRING
      },
      legal_form: {
        type: Sequelize.STRING
      },
      place_registred: {
        type: Sequelize.STRING
      },
      registration_number: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      name_without_line: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      forename: {
        type: Sequelize.STRING
      },
      middle_name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      nature_of_control: {
        type: Sequelize.STRING
      },
      notified_on: {
        type: Sequelize.STRING
      },
      ceased: {
        type: Sequelize.STRING
      },
      restrictions_notice_withdrawal_reason: {
        type: Sequelize.STRING
      },
      linked_psc_name: {
        type: Sequelize.STRING
      },
      statement: {
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
    await queryInterface.dropTable('dbp_psc_gens');
  }
};