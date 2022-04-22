'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dba_hmrc_import_gens', {
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
      dba_hmrc_imp_id: {
        type: Sequelize.INTEGER
      },
      chn: {
        type: Sequelize.STRING
      },
      dbe_id: {
        type: Sequelize.INTEGER
      },
      hmrc_date: {
        type: Sequelize.STRING
      },
      hmrc_date2: {
        type: Sequelize.DATE
      },
      number: {
        type: Sequelize.INTEGER
      },
      company_name: {
        type: Sequelize.STRING
      },
      address1: {
        type: Sequelize.STRING
      },
      address2: {
        type: Sequelize.STRING
      },
      address3: {
        type: Sequelize.STRING
      },
      address4: {
        type: Sequelize.STRING
      },
      address5: {
        type: Sequelize.STRING
      },
      hmrc_postcode: {
        type: Sequelize.STRING
      },
      hmrc_code1: {
        type: Sequelize.STRING
      },
      hmrc_code2: {
        type: Sequelize.STRING
      },
      hmrc_code3: {
        type: Sequelize.STRING
      },
      hmrc_code4: {
        type: Sequelize.STRING
      },
      hmrc_code5: {
        type: Sequelize.STRING
      },
      hmrc_code6: {
        type: Sequelize.STRING
      },
      hmrc_code7: {
        type: Sequelize.STRING
      },
      hmrc_code8: {
        type: Sequelize.STRING
      },
      hmrc_code9: {
        type: Sequelize.STRING
      },
      hmrc_code10: {
        type: Sequelize.STRING
      },
      hmrc_code11: {
        type: Sequelize.STRING
      },
      hmrc_code12: {
        type: Sequelize.STRING
      },
      hmrc_code13: {
        type: Sequelize.STRING
      },
      hmrc_code14: {
        type: Sequelize.STRING
      },
      hmrc_code15: {
        type: Sequelize.STRING
      },
      hmrc_code16: {
        type: Sequelize.STRING
      },
      hmrc_code17: {
        type: Sequelize.STRING
      },
      hmrc_code18: {
        type: Sequelize.STRING
      },
      hmrc_code19: {
        type: Sequelize.STRING
      },
      hmrc_code20: {
        type: Sequelize.STRING
      },
      hmrc_code21: {
        type: Sequelize.STRING
      },
      hmrc_code22: {
        type: Sequelize.STRING
      },
      hmrc_code23: {
        type: Sequelize.STRING
      },
      hmrc_code24: {
        type: Sequelize.STRING
      },
      hmrc_code25: {
        type: Sequelize.STRING
      },
      hmrc_code26: {
        type: Sequelize.STRING
      },
      hmrc_code27: {
        type: Sequelize.STRING
      },
      hmrc_code28: {
        type: Sequelize.STRING
      },
      hmrc_code29: {
        type: Sequelize.STRING
      },
      hmrc_code30: {
        type: Sequelize.STRING
      },
      hmrc_code31: {
        type: Sequelize.STRING
      },
      hmrc_code32: {
        type: Sequelize.STRING
      },
      hmrc_code33: {
        type: Sequelize.STRING
      },
      hmrc_code34: {
        type: Sequelize.STRING
      },
      hmrc_code35: {
        type: Sequelize.STRING
      },
      hmrc_code36: {
        type: Sequelize.STRING
      },
      hmrc_code37: {
        type: Sequelize.STRING
      },
      hmrc_code38: {
        type: Sequelize.STRING
      },
      hmrc_code39: {
        type: Sequelize.STRING
      },
      hmrc_code40: {
        type: Sequelize.STRING
      },
      hmrc_code41: {
        type: Sequelize.STRING
      },
      hmrc_code42: {
        type: Sequelize.STRING
      },
      hmrc_code43: {
        type: Sequelize.STRING
      },
      hmrc_code44: {
        type: Sequelize.STRING
      },
      hmrc_code45: {
        type: Sequelize.STRING
      },
      hmrc_code46: {
        type: Sequelize.STRING
      },
      hmrc_code47: {
        type: Sequelize.STRING
      },
      hmrc_code48: {
        type: Sequelize.STRING
      },
      hmrc_code49: {
        type: Sequelize.STRING
      },
      hmrc_code50: {
        type: Sequelize.STRING
      },
      check: {
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
    await queryInterface.dropTable('dba_hmrc_import_gens');
  }
};