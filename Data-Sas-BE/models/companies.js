'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class companies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // companies.hasOne(models.compines_offical,{
      //   foreignKey: { name: 'chn', allowNull: false },
      //   sourceKey:'chn',
      //   targetKey:'company_number'
      // })
      models.compines_offical.belongsTo(companies,{
        foreignKey: { name: 'company_number', allowNull: false },
        sourceKey:'company_number',
        targetKey:'chn'
      })
    }
  };
  companies.init({
    chn: DataTypes.STRING,
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Or Sequelize.UUIDV1
      unique: true,
    },
    dbe_id: DataTypes.INTEGER,
    website_url_1: DataTypes.STRING,
    email1: DataTypes.STRING,
    phone1: DataTypes.STRING,
    company_tps: DataTypes.BOOLEAN,
    company_ctps: DataTypes.BOOLEAN,
    business_name: DataTypes.STRING,
    company_name_short: DataTypes.STRING,
    companycategory: DataTypes.STRING,
    company_account_category: DataTypes.STRING,
    business_activity: DataTypes.STRING,
    country: DataTypes.STRING,
    uk_business: DataTypes.STRING,
    territory: DataTypes.STRING,
    region: DataTypes.STRING,
    county: DataTypes.STRING,
    city: DataTypes.STRING,
    postcode: DataTypes.STRING,
    postcode_trim: DataTypes.STRING,
    no_recorded_locations: DataTypes.INTEGER,
    no_recorded_web_urls: DataTypes.INTEGER,
    no_recorded_web_urls_live: DataTypes.INTEGER,
    no_recorded_mails: DataTypes.INTEGER,
    no_recorded_phones: DataTypes.INTEGER,
    status: DataTypes.STRING,
    company_status_detail: DataTypes.DATE,
    established_date: DataTypes.DATE,
    age_of_business: DataTypes.INTEGER,
    business_size: DataTypes.STRING,
    turnover_estimate: DataTypes.FLOAT,
    turnover_estimate_date: DataTypes.DATE,
    turnover_class_actual: DataTypes.STRING,
    turnover_class_estimate: DataTypes.STRING,
    size_estimate: DataTypes.INTEGER,
    size_estimate_date: DataTypes.DATE,
    size_class_actual: DataTypes.STRING,
    size_class_estimate: DataTypes.STRING,
    ownership_type: DataTypes.STRING,
    business_type: DataTypes.STRING,
    account_class: DataTypes.STRING,
    cycle_type: DataTypes.STRING,
    end_user_type: DataTypes.STRING,
    tangibility_type: DataTypes.STRING,
    goods_services: DataTypes.STRING,
    exporter: DataTypes.STRING,
    export_probability: DataTypes.STRING,
    importer: DataTypes.STRING,
    n_economy_sector: DataTypes.STRING,
    n_conglomerate_sector: DataTypes.STRING,
    n_industry_sector: DataTypes.STRING,
    n_activity_sector: DataTypes.STRING,
    main_sector: DataTypes.STRING,
    main_subsector: DataTypes.STRING,
    sic_section: DataTypes.STRING,
    sic_division: DataTypes.STRING,
    sic_group: DataTypes.STRING,
    sic_class: DataTypes.STRING,
    uk_sic_2007_code: DataTypes.STRING,
    sic2007_secondary: DataTypes.STRING,
    uk_sic_2003: DataTypes.STRING,
    nace_rev_2_code: DataTypes.STRING,
    nace_rev_2_secondary_code: DataTypes.STRING,
    naics_2017_code: DataTypes.STRING,
    last_accounts_date: DataTypes.DATE,
    updated: DataTypes.DATE,
    accounts__next_accounts__overdue: DataTypes.BOOLEAN,
    accounts__overdue: DataTypes.BOOLEAN,
    annual_return__overdue: DataTypes.BOOLEAN,
    branch_company_details__business_activity: DataTypes.TEXT,
    company_status_detail1: DataTypes.STRING,
    has_been_liquidated: DataTypes.BOOLEAN,
    has_charges: DataTypes.BOOLEAN,
    has_insolvency_history: DataTypes.BOOLEAN,
    is_community_interest_company: DataTypes.BOOLEAN,
    jurisdiction: DataTypes.STRING,
    registered_office_is_in_dispute: DataTypes.BOOLEAN,
    subtype: DataTypes.STRING,
    type: DataTypes.STRING,
    undeliverable_registered_office_address: DataTypes.BOOLEAN,
    last_estimated_turnover_before_dissolution: DataTypes.FLOAT,
    last_recorded_turnover_before_dissolution: DataTypes.FLOAT,
    last_estimated_size_before_dissolution: DataTypes.INTEGER,
    last_recorded_size_before_dissolution: DataTypes.INTEGER,
    company_classification: DataTypes.STRING,
    company_parliamentary_constituency_name: DataTypes.STRING,
    company_local_enterprise_partnership_lep_name: DataTypes.STRING,
    virtual_county: DataTypes.STRING,
    virtual_region: DataTypes.STRING,
    virtual_lep1: DataTypes.STRING,
    virtual_lep2: DataTypes.STRING,
    virtual_constituency: DataTypes.STRING,
    limitedpartnerships_numgenpartners: DataTypes.STRING,
    limitedpartnerships_numlimpartners: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'companies',
  });
  return companies;
};