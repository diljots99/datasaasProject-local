'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dbp_full_contact_phones', {
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
      dbpf_id: {
        type: Sequelize.INTEGER,
        foreignKey:true,
        references: { model: 'dbp_full_contacts', key: 'dbpf_id' },
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION',
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
      dbp_id: {
        type: Sequelize.STRING
      },
      dbp_officers_id: {
        type: Sequelize.INTEGER,
        foreignKey:true,
        references: { model: 'officers', key: 'id' }
      },
      dbp_psc_id: {
        type: Sequelize.INTEGER,
        foreignKey:true,
        references: { model: 'dbp_psc_gens', key: 'id' }
      },
      phone: {
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
    await queryInterface.dropTable('dbp_full_contact_phones');
  }
};