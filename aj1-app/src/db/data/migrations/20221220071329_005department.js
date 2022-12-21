/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("user_budge", (table) => {
        table.integer("user_id").references("id").inTable("user");
        table.integer("budge_id").references("id").inTable("budge");
        table.string("user_id_budge_id").notNullable().unique();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("user_budge");
};
