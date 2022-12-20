/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('budge').del()
  await knex('budge').insert([
    {id: 1, budge_name: '作業指揮者', budge_type_id: '2'},
    {id: 2, budge_name: 'フォークリフト', budge_type_id: '2'},
    {id: 3, budge_name: '基本情報技術者', budge_type_id: '1'}
  ]);
};
