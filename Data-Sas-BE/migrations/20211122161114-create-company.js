'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('compines_officals', {
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
      dbe_id: {
        type: Sequelize.INTEGER,
        unique:true
      },
      chn: {
        type: Sequelize.STRING,
        unique:true
        
      },
      company_name: {
        type: Sequelize.STRING
      },
      company_number: {
        type: Sequelize.STRING
      },
      regaddress_careof: {
        type: Sequelize.STRING
      },
      regaddress_pobox: {
        type: Sequelize.STRING
      },
      regaddress_addressline1: {
        type: Sequelize.STRING
      },
      regaddress_addressline2: {
        type: Sequelize.STRING
      },
      regaddress_posttown: {
        type: Sequelize.STRING
      },
      regaddress_county: {
        type: Sequelize.STRING
      },
      regaddress_country: {
        type: Sequelize.STRING
      },
      regaddress_postcode: {
        type: Sequelize.STRING
      },
      regaddress_postcode_trim: {
        type: Sequelize.STRING
      },
      company_category: {
        type: Sequelize.STRING
      },
      company_status: {
        type: Sequelize.STRING
      },
      country_of_origin: {
        type: Sequelize.STRING
      },
      dissolution_date: {
        type: Sequelize.DATE
      },
      incorporation_date: {
        type: Sequelize.DATE
      },
      accounts_account_ref_day: {
        type: Sequelize.STRING
      },
      accounts_account_ref_month: {
        type: Sequelize.STRING
      },
      accounts_next_due_date: {
        type: Sequelize.STRING
      },
      accounts_last_made_update: {
        type: Sequelize.STRING
      },
      accounts_account_category: {
        type: Sequelize.STRING
      },
      returns_nextduedate: {
        type: Sequelize.STRING
      },
      returns_lastmadeupdate: {
        type: Sequelize.STRING
      },
      mortgages_nummortcharges: {
        type: Sequelize.STRING
      },
      mortgages_nummortoutstanding: {
        type: Sequelize.STRING
      },
      mortgages_nummortpartsatisfied: {
        type: Sequelize.STRING
      },
      mortgages_nummortsatisfied: {
        type: Sequelize.STRING
      },
      siccode_sictext_1: {
        type: Sequelize.STRING
      },
      siccode_1: {
        type: Sequelize.STRING
      },
      siccode_sictext_2: {
        type: Sequelize.STRING
      },
      siccode_2: {
        type: Sequelize.STRING
      },
      siccode_sictext_3: {
        type: Sequelize.STRING
      },
      siccode_3: {
        type: Sequelize.STRING
      },
      siccode_sictext_4: {
        type: Sequelize.STRING
      },
      siccode_4: {
        type: Sequelize.STRING
      },
      limitedpartnerships_numgenpartners: {
        type: Sequelize.STRING
      },
      limitedpartnerships_numlimpartners: {
        type: Sequelize.STRING
      },
      uri: {
        type: Sequelize.STRING
      },
      previousname_1_condate: {
        type: Sequelize.STRING
      },
      _previousname_1_companyname: {
        type: Sequelize.STRING
      },
      
      _previousname_2_condate: {
        type: Sequelize.STRING
      },
      _previousname_2_companyname: {
        type: Sequelize.STRING
      },
      previousname_3_condate: {
        type: Sequelize.STRING
      },
      _previousname_3_companyname: {
        type: Sequelize.STRING
      },
      previousname_4_condate: {
        type: Sequelize.STRING
      },
      _previousname_4_companyname: {
        type: Sequelize.STRING
      },
      previousname_5_condate: {
        type: Sequelize.STRING
      },
      _previousname_5_companyname: {
        type: Sequelize.STRING
      },
      previousname_6_condate: {
        type: Sequelize.STRING
      },
      _previousname_6_companyname: {
        type: Sequelize.STRING
      },
      previousname_7_condate: {
        type: Sequelize.STRING
      },
      _previousname_7_companyname: {
        type: Sequelize.STRING
      },
      previousname_8_condate: {
        type: Sequelize.STRING
      },
      _previousname_8_companyname: {
        type: Sequelize.STRING
      },
      previousname_9_condate: {
        type: Sequelize.STRING
      },
      _previousname_9_companyname: {
        type: Sequelize.STRING
      },
      previousname_10_condate: {
        type: Sequelize.STRING
      },
      _previousname_10_companyname: {
        type: Sequelize.STRING
      },
      confstmtnextduedate: {
        type: Sequelize.STRING
      },
      confstmtlastmadeupdate: {
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
    await queryInterface.dropTable('compines_officals');
  }
};