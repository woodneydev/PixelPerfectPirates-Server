const table_2_data = require("../seed-data/table-2-seed");  // data imported

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // change from post table
  await knex('post').del()
  await knex('post').insert(table_2_data); //data being inserted
};

// change from table_1 to table name
// don't forget .env file