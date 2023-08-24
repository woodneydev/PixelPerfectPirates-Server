const table_1_data = require("../seed-data/table-1-seed"); // data imported

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // change from user table
  await knex('user').del()
  await knex('user').insert(table_1_data); //data being inserted
};

// change from table_1 to table name
// don't forget .env file


//1. start with migrations
//2. move on to seeds
//3. move on to seed data
// run commands from packages.json