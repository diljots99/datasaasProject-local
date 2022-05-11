'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('subcription_details', {
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
      user_id: {
        type: Sequelize.INTEGER,
        foreignKey:true,
        references: { model: 'users', key: 'id' }
      },
      plan_details_id: {
        type: Sequelize.INTEGER,
        foreignKey:true,
        references: { model: 'plan_details', key: 'id' }
      },
      limit_availabile_id: {
        type: Sequelize.INTEGER,
        foreignKey:true,
        references: { model: 'limits_availables', key: 'id' }
      },
      sub_sr_no: {
        type: Sequelize.STRING
      },
      sub_limit_details: {
        type: Sequelize.STRING
      },
      sub_subscriptions_details: {
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
    await queryInterface.dropTable('subcription_details');
  }
};