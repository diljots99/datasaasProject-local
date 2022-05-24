'use strict';
const view_name = 'View_unique_hmrc_exports';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users','u_county',{
      type:Sequelize.STRING,
      allowNull: true,
    })
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
