/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('dr_seuss_books', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.integer('year_published')
    table.boolean('read_status')
    table.string('cover')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('dr_seuss_books')
}
