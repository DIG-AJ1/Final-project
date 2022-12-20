/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('budge_type').del()
  await knex('budge_type').insert([
    {id: 1, budge_type: 'national qualifications'},
    {id: 2, budge_type: 'internal qualifications'},
    {id: 3, budge_type: 'career experience'}
  ]);
};
