'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      website_url_1: {
        type: Sequelize.STRING
      },
      email1: {
        type: Sequelize.STRING
      },
      phone1: {
        type: Sequelize.STRING
      },
      company_tps: {
        type: Sequelize.BOOLEAN
      },
      company_ctps: {
        type: Sequelize.BOOLEAN
      },
      business_name: {
        type: Sequelize.STRING
      },
      company_name_short: {
        type: Sequelize.STRING
      },
      companycategory: {
        type: Sequelize.STRING
      },
      company_account_category: {
        type: Sequelize.STRING
      },
      business_activity: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      uk_business: {
        type: Sequelize.STRING
      },
      territory: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      county: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      postcode: {
        type: Sequelize.STRING
      },
      postcode_trim: {
        type: Sequelize.STRING
      },
      no_recorded_locations: {
        type: Sequelize.INTEGER
      },
      no_recorded_web_urls: {
        type: Sequelize.INTEGER
      },
      no_recorded_web_urls_live: {
        type: Sequelize.INTEGER
      },
      no_recorded_mails: {
        type: Sequelize.INTEGER
      },
      no_recorded_phones: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      company_status_detail: {
        type: Sequelize.DATE
      },
      established_date: {
        type: Sequelize.DATE
      },
      age_of_business: {
        type: Sequelize.INTEGER
      },
      business_size: {
        type: Sequelize.STRING
      },
      turnover_estimate: {
        type: Sequelize.FLOAT
      },
      turnover_estimate_date: {
        type: Sequelize.DATE
      },
      turnover_class_actual: {
        type: Sequelize.STRING
      },
      turnover_class_estimate: {
        type: Sequelize.STRING
      },
      size_estimate: {
        type: Sequelize.INTEGER
      },
      size_estimate_date: {
        type: Sequelize.DATE
      },
      size_class_actual: {
        type: Sequelize.STRING
      },
      size_class_estimate: {
        type: Sequelize.STRING
      },
      ownership_type: {
        type: Sequelize.STRING
      },
      business_type: {
        type: Sequelize.STRING
      },
      account_class: {
        type: Sequelize.STRING
      },
      cycle_type: {
        type: Sequelize.STRING
      },
      end_user_type: {
        type: Sequelize.STRING
      },
      tangibility_type: {
        type: Sequelize.STRING
      },
      goods_services: {
        type: Sequelize.STRING
      },
      exporter: {
        type: Sequelize.STRING
      },
      export_probability: {
        type: Sequelize.STRING
      },
      importer: {
        type: Sequelize.STRING
      },
      n_economy_sector: {
        type: Sequelize.STRING
      },
      n_conglomerate_sector: {
        type: Sequelize.STRING
      },
      n_industry_sector: {
        type: Sequelize.STRING
      },
      n_activity_sector: {
        type: Sequelize.STRING
      },
      main_sector: {
        type: Sequelize.STRING
      },
      main_subsector: {
        type: Sequelize.STRING
      },
      sic_section: {
        type: Sequelize.STRING
      },
      sic_division: {
        type: Sequelize.STRING
      },
      sic_group: {
        type: Sequelize.STRING
      },
      sic_class: {
        type: Sequelize.STRING
      },
      uk_sic_2007_code: {
        type: Sequelize.STRING
      },
      sic2007_secondary: {
        type: Sequelize.STRING
      },
      uk_sic_2003: {
        type: Sequelize.STRING
      },
      nace_rev_2_code: {
        type: Sequelize.STRING
      },
      nace_rev_2_secondary_code: {
        type: Sequelize.STRING
      },
      naics_2017_code: {
        type: Sequelize.STRING
      },
      last_accounts_date: {
        type: Sequelize.DATE
      },
      updated: {
        type: Sequelize.DATE
      },
      accounts__next_accounts__overdue: {
        type: Sequelize.BOOLEAN
      },
      accounts__overdue: {
        type: Sequelize.BOOLEAN
      },
      annual_return__overdue: {
        type: Sequelize.BOOLEAN
      },
      branch_company_details__business_activity: {
        type: Sequelize.TEXT
      },
      company_status_detail1: {
        type: Sequelize.STRING
      },
      has_been_liquidated: {
        type: Sequelize.BOOLEAN
      },
      has_charges: {
        type: Sequelize.BOOLEAN
      },
      has_insolvency_history: {
        type: Sequelize.BOOLEAN
      },
      is_community_interest_company: {
        type: Sequelize.BOOLEAN
      },
      jurisdiction: {
        type: Sequelize.STRING
      },
      registered_office_is_in_dispute: {
        type: Sequelize.BOOLEAN
      },
      subtype: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      undeliverable_registered_office_address: {
        type: Sequelize.BOOLEAN
      },
      last_estimated_turnover_before_dissolution: {
        type: Sequelize.FLOAT
      },
      last_recorded_turnover_before_dissolution: {
        type: Sequelize.FLOAT
      },
      last_estimated_size_before_dissolution: {
        type: Sequelize.INTEGER
      },
      last_recorded_size_before_dissolution: {
        type: Sequelize.INTEGER
      },
      company_classification: {
        type: Sequelize.STRING
      },
      company_parliamentary_constituency_name: {
        type: Sequelize.STRING
      },
      company_local_enterprise_partnership_lep_name: {
        type: Sequelize.STRING
      },
      virtual_county: {
        type: Sequelize.STRING
      },
      virtual_region: {
        type: Sequelize.STRING
      },
      virtual_lep1: {
        type: Sequelize.STRING
      },
      virtual_lep2: {
        type: Sequelize.STRING
      },
      virtual_constituency: {
        type: Sequelize.STRING
      },
      limitedpartnerships_numgenpartners: {
        type: Sequelize.STRING
      },
      limitedpartnerships_numlimpartners: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('companies');
  }
};