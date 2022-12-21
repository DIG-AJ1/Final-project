/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("user").del()
  await knex("user").insert([
    {id: 1, login_number: 101, user_name: "taro", password: "pw1", token: "js", department_id: 1},
    {id: 2, login_number: 102, user_name: "jiro", password: "pw2", token: "js1", department_id: 1},
    {id: 3, login_number: 103, user_name: "saburo", password: "pw3", token: "js2", department_id: 1}
  ]);
};
