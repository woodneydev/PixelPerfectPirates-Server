exports.up = function (knex) {
    return knex.schema
      .createTable("post", (table) => { // post*** table name will need to change --> check the column names and data types below as well
        table.increments("id").primary();
        table.string("title").notNullable();
        table.string("content", 1000).notNullable();
        table.integer("likes").notNullable().defaultTo(0);
        table
          .integer("user_id")
          .unsigned()
          .references("user.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table
          .timestamp("updated_at")
          .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
      });
  };
  

exports.down = function (knex) {
    return knex.schema.dropTable("post");
};

// rerun npx knex migrate:make <tablename> --copy and past this file into it