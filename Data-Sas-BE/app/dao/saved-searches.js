const model = require("../../models");

async function createSavedSearch(data) {
  return model.saved_search.create(data, {
    attributes: ["uuid", "fliter_name", "search_type", "user_id"],
    include: [
      {
        attributes: ["uuid", "chip_group"],
        model: model.saved_searches_chip_data,
        as: "chip_data",
        include: [
          {
            attributes: ["uuid", "chip_value"],

            model: model.saved_searches_chip_values,
            as: "chip_values",
          },
        ],
      },
    ],
  });
}

async function findAllSavedSearches(data) {
  return model.saved_search.findAll({
    attributes: ["uuid", "fliter_name", "search_type", "user_id"],
    include: [
      {
        attributes: ["uuid", "chip_group"],
        model: model.saved_searches_chip_data,
        as: "chip_data",
        include: [
          {
            attributes: ["uuid", "chip_value"],

            model: model.saved_searches_chip_values,
            as: "chip_values",
          },
        ],
      },
    ],
    ...data
  });
}

async function findUserByEmail(data) {
  return model.User.findOne(data);
}

module.exports = {
  createSavedSearch,
  findUserByEmail,
  findAllSavedSearches,
};
