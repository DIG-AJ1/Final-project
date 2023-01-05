/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('budge_type').del()
  await knex('budge_type').insert([
    {id: 1, budge_type: 'national qualifications'}, // 国家資格
    {id: 2, budge_type: 'public qualifications'}, // 公的資格
    {id: 3, budge_type: 'private qualification'}, // 民間資格
    {id: 4, budge_type: 'internal qualifications'}, // 社内資格
    {id: 5, budge_type: 'career experience'} // 職歴
  ]);
};
