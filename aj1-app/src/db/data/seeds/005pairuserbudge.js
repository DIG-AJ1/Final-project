/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_budge').del()
  await knex('user_budge').insert([
    {user_id: 1, budge_id: 1, user_id_budge_id: 11,status:2,url:"https://google.com",certification_date:"2022/09/01"},
    {user_id: 1, budge_id: 2, user_id_budge_id: 12,status:2,url:"https://google.com",certification_date:"2022/09/01"},
    {user_id: 1, budge_id: 3, user_id_budge_id: 13,status:2,url:"https://google.com",certification_date:"2022/09/01"},
    {user_id: 2, budge_id: 1, user_id_budge_id: 21,status:2,url:"https://google.com",certification_date:"2022/09/01"},
    {user_id: 2, budge_id: 2, user_id_budge_id: 22,status:2,url:"https://google.com",certification_date:"2022/09/01"},
    {user_id: 3, budge_id: 1, user_id_budge_id: 31,status:2,url:"https://google.com",certification_date:"2022/09/01"},

  ]);
};
