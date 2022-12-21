/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("budge", (table) => {
        table.increments("id").primary();
        table.string("budge_name").notNullable().unique();
        table.integer("budge_type_id").references("id").inTable("budge_type");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("budge");
};
