/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_budge').del()
  await knex('user').del()
  await knex('budge').del()

  await knex('department').del()
  await knex('department').insert([
    {id: 1, department: 'デジタル変革推進室'},
    {id: 2, department: '車両品質部'},
    {id: 3, department: 'モビリティ開発部'}
  ]);
};
