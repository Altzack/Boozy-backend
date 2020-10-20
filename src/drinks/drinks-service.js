const DrinksService = {
  getAllDrinks(knex) {
    return knex.select("*").from("Boozy_drinks");
  },
  insertDrink(knex, newDrink) {
    return knex
      .insert(newDrink)
      .into("Boozy_drinks")
      .returning("*")
      .then((rows) => {
        return rows[0];
      });
  },
  getById(knex, id) {
    return knex.from("Boozy_drinks").select("*").where("id", id).first();
  },
  deleteDrink(knex, id) {
    return knex("Boozy_drinks").where({ id }).delete();
  },
  updateDrink(knex, id, newDrinkFields) {
    return knex("Boozy_drinks").where({ id }).update(newDrinkFields);
  },
};

module.exports = DrinksService;
