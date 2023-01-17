/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('budge').del()
  await knex('budge').insert([
    {id: 0, budge_name: 'MHIS', budge_type_id: '1'},
    {id: 1, budge_name: 'ITパスポート', budge_type_id: '1'},
    {id: 2, budge_name: '情報セキュリティマネジメント', budge_type_id: '1'},
    {id: 3, budge_name: '基本情報技術者', budge_type_id: '1'},
    {id: 4, budge_name: '応用情報技術者', budge_type_id: '1'},
    {id: 5, budge_name: 'データベーススペシャリスト', budge_type_id: '1'},
    {id: 6, budge_name: 'CIW JavaScript スペシャリスト', budge_type_id: '1'},
    {id: 7, budge_name: 'HTML5プロフェッショナル認定試験', budge_type_id: '1'},
    {id: 8, budge_name: 'AWS Certified Cloud Practitioner', budge_type_id: '1'},
    {id: 9, budge_name: 'AWS Certified Solutions Architect', budge_type_id: '1'},
    {id: 10, budge_name: 'AWS Certified DevOps Engineer', budge_type_id: '1'},
    {id: 11, budge_name: 'ITストラジスト', budge_type_id: '1'},
    {id: 12, budge_name: 'システムアーキテクチャ', budge_type_id: '1'},
    {id: 13, budge_name: 'ネットワークスペシャリスト', budge_type_id: '1'},
    {id: 14, budge_name: '情報処理安全確保支援士', budge_type_id: '1'},
    {id: 15, budge_name: 'システム監査技術者', budge_type_id: '1'},
    {id: 16, budge_name: 'ITサービスマネージャ', budge_type_id: '1'},
  ]);
};
