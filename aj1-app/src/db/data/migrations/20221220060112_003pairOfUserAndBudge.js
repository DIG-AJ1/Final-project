/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("user", (table) => {
        table.increments("id").primary();
        table.integer("login_number").unique();
        table.string("user_name").notNullable();
        table.string("password").notNullable();
        table.string("token").unique();
        table.integer("department_id").references("id").inTable("department");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("user");
};
