'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addConstraint('companies', {
      fields: ['chn'],
      type: 'FOREIGN KEY',
      name: 'forgien_key_compnaies_to_companie_offical',
      references: { //Required field
        table: 'compines_officals',
        field: 'chn'
      },
      onDelete: 'no action',
      onUpdate: 'no action'
    })

  },
  down: async (queryInterface, Sequelize) => {
   
  }
};