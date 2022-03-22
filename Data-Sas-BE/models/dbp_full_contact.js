'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dbp_full_contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  dbp_full_contact.init({
    uid: DataTypes.STRING,
    dbpf_id: DataTypes.INTEGER,
    dbp_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
    chn: DataTypes.STRING,
    dbe_id: DataTypes.INTEGER,
    dbp_officers_id: DataTypes.INTEGER,
    dbp_psc_id: DataTypes.INTEGER,
    company_name: DataTypes.STRING,
    business_name: DataTypes.STRING,
    title: DataTypes.STRING,
    full_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    midlle_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    job_title: DataTypes.STRING,
    contact_category: DataTypes.STRING,
    job_function: DataTypes.STRING,
    job_department: DataTypes.STRING,
    job_rank: DataTypes.STRING,
    job_department_detail: DataTypes.STRING,
    job_division: DataTypes.STRING,
    mailable: DataTypes.STRING,
    phoneable: DataTypes.STRING,
    languagename: DataTypes.STRING,
    last_validated: DataTypes.STRING,
    date_of_birth_year: DataTypes.STRING,
    date_of_birth_month: DataTypes.STRING,
    country_of_residence: DataTypes.STRING,
    officers_kind: DataTypes.STRING,
    psc_kin: DataTypes.STRING,
    country: DataTypes.STRING,
    address_line_1: DataTypes.STRING,
    premises: DataTypes.STRING,
    region: DataTypes.STRING,
    locality: DataTypes.STRING,
    nationality: DataTypes.STRING,
    officers_noted_on: DataTypes.STRING,
    psc_notified_on: DataTypes.STRING,
    officer_role: DataTypes.STRING,
    occupation: DataTypes.STRING,
    resigned_on: DataTypes.STRING,
    appointed_on: DataTypes.STRING,
    officer: DataTypes.STRING,
    psc: DataTypes.STRING,
    updated: DataTypes.STRING,
    linkedin_handle: DataTypes.STRING,
    no_recorded_mails: DataTypes.STRING,
    no_recoreded_phones: DataTypes.STRING,
    job_role_level: DataTypes.STRING,
    occupation_nature_of_job: DataTypes.STRING,
    website: DataTypes.STRING,
    facebook: DataTypes.STRING,
    twitter: DataTypes.STRING,
    instagram: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dbp_full_contact',
  });
  return dbp_full_contact;
};