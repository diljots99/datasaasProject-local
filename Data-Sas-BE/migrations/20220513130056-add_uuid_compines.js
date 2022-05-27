'use strict';
const view_name = 'View_unique_hmrc_exports';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('companies','uuid',{
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue:Sequelize.UUIDV4,

    })
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
