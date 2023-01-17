/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("user_budge", (table) => {
        table.integer("user_id_budge_id").notNullable().unique();
        table.integer("user_id").references("id").inTable("user");
        table.integer("budge_id").references("id").inTable("budge");
        //変更点
        table.integer("status").notNullable();
        table.string("certification_date");
        table.string("url");
        table.integer("unchecked");

    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("user_budge");
};
