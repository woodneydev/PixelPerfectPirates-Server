exports.up = function (knex) {
    return knex.schema
      .createTable("user", (table) => { // user*** table name will need to change --> check the column names and data types below as well
        table.increments("id").primary();
        table.string("name").notNullable();
        table.string("email").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table
          .timestamp("updated_at")
          .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
      })
  };


exports.down = function (knex) {
    return knex.schema.dropTable("user");
};

// rerun npx knex migrate:make <tablename> --copy and past this file into it