/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    // return knex.schema.createTable("user", (table) => {
    //     table.increments("id").primary();
    //     table.integer("login_number").unique();
    //     table.string("uesr_name");
    //     table.string("password");
    //     table.string("token").unique();
    //     table.integer("department_id").references("id").inTable("department")
    // });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    // return knex.schema.dropTable("user");
};

