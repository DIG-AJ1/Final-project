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
    {id: 3, budge_name: '基本情報技術者', budge_type_id: '1'},
    {id: 4, budge_name: 'JavaScript', budge_type_id: '1'},
    {id: 5, budge_name: 'React', budge_type_id: '1'},
    {id: 6, budge_name: 'Express', budge_type_id: '1'},
    {id: 7, budge_name: 'swift', budge_type_id: '1'},
    {id: 8, budge_name: 'AWS', budge_type_id: '1'},
    {id: 9, budge_name: 'AWS2', budge_type_id: '1'},
    {id: 10, budge_name: 'AWS3', budge_type_id: '1'},
    {id: 11, budge_name: 'AWS4', budge_type_id: '1'},
    {id: 12, budge_name: 'AWS5', budge_type_id: '1'},
  ]);
};
