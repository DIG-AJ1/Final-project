/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("user").del()
  await knex("user").insert([
    {id: 1, login_number: 1111111, user_name: "浅野 雅夫", password: "1234567", role:0, token: "js", department_id: 1},
    {id: 2, login_number: 2222222, user_name: "葛山 由羽", password: "1234567", role:0, token: "js1", department_id: 1},
    {id: 3, login_number: 3333333, user_name: "平岡 琢也", password: "1234567", role:0, token: "js2", department_id: 1},
    {id: 4, login_number: 4444444, user_name: "伴野 優子", password: "1234567", role:0, token: "js3", department_id: 1},
    {id: 5, login_number: 5555555, user_name: "菅波 敦", password: "1234567", role:0, token: "js4", department_id: 1},
    {id: 9, login_number: 9999999, user_name: "阿比留 邦実", password: "1234567", role:1, token: "js9", department_id: 1}
  ]);
};
