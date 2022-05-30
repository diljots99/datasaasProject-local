'use strict';
const function_name = 'uuid_v4';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`CREATE FUNCTION ${function_name}() RETURNS char(36) CHARSET utf8mb4
    BEGIN
        RETURN LOWER(CONCAT(
                HEX(RANDOM_BYTES(4)),
                '-', HEX(RANDOM_BYTES(2)),
                '-4', SUBSTR(HEX(RANDOM_BYTES(2)), 2, 3),
                '-', HEX(FLOOR(ASCII(RANDOM_BYTES(1)) / 64) + 8), SUBSTR(HEX(RANDOM_BYTES(2)), 2, 3),
                '-', hex(RANDOM_BYTES(6))
            ));
    END`);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`DROP function IF EXISTS ${function_name}`);
  }
};
