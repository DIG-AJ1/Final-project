/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("user").del()
  await knex("user").insert([
    {id: 1, login_number: 101, user_name: "浅野 雅夫", password: "pw1", role:0, token: "js", department_id: 1},
    {id: 2, login_number: 102, user_name: "葛山 由羽", password: "pw2", role:0, token: "js1", department_id: 1},
    {id: 3, login_number: 103, user_name: "平岡 琢也", password: "pw3", role:0, token: "js2", department_id: 1},
    {id: 9, login_number: 999, user_name: "阿比留 邦実", password: "pw9", role:1, token: "js9", department_id: 1}
  ]);
};
