'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dbp_full_contacts', {
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
      dbpf_id: {
        type: Sequelize.INTEGER,
        unique:true
      },
      dbp_id: {
        type: Sequelize.INTEGER
      },
      company_id: {
        type: Sequelize.INTEGER,
        foreignKey:true,
        references: { model: 'compines_offical', key: 'id' },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION',
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
      dbp_officers_id: {
        type: Sequelize.INTEGER,
        foreignKey:true,
        references: { model: 'officers', key: 'id' },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION',
      },
      dbp_psc_id: {
        type: Sequelize.INTEGER,
        // foreignKey:true,
        // references: { model: 'dbp_psc_gens', key: 'psc_id' },
        // onUpdate: 'NO ACTION',
        // onDelete: 'NO ACTION',
      },
      company_name: {
        type: Sequelize.STRING
      },
      business_name: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      full_name: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      midlle_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      job_title: {
        type: Sequelize.STRING
      },
      contact_category: {
        type: Sequelize.STRING
      },
      job_function: {
        type: Sequelize.STRING
      },
      job_department: {
        type: Sequelize.STRING
      },
      job_rank: {
        type: Sequelize.STRING
      },
      job_department_detail: {
        type: Sequelize.STRING
      },
      job_division: {
        type: Sequelize.STRING
      },
      mailable: {
        type: Sequelize.STRING
      },
      phoneable: {
        type: Sequelize.STRING
      },
      languagename: {
        type: Sequelize.STRING
      },
      last_validated: {
        type: Sequelize.STRING
      },
      date_of_birth_year: {
        type: Sequelize.STRING
      },
      date_of_birth_month: {
        type: Sequelize.STRING
      },
      country_of_residence: {
        type: Sequelize.STRING
      },
      officers_kind: {
        type: Sequelize.STRING
      },
      psc_kin: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      address_line_1: {
        type: Sequelize.STRING
      },
      premises: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      locality: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      officers_noted_on: {
        type: Sequelize.STRING
      },
      psc_notified_on: {
        type: Sequelize.STRING
      },
      officer_role: {
        type: Sequelize.STRING
      },
      occupation: {
        type: Sequelize.STRING
      },
      resigned_on: {
        type: Sequelize.STRING
      },
      appointed_on: {
        type: Sequelize.STRING
      },
      officer: {
        type: Sequelize.STRING
      },
      psc: {
        type: Sequelize.STRING
      },
      updated: {
        type: Sequelize.STRING
      },
      linkedin_handle: {
        type: Sequelize.STRING
      },
      no_recorded_mails: {
        type: Sequelize.STRING
      },
      no_recoreded_phones: {
        type: Sequelize.STRING
      },
      job_role_level: {
        type: Sequelize.STRING
      },
      occupation_nature_of_job: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      facebook: {
        type: Sequelize.STRING
      },
      twitter: {
        type: Sequelize.STRING
      },
      instagram: {
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
    await queryInterface.dropTable('dbp_full_contacts');
  }
};