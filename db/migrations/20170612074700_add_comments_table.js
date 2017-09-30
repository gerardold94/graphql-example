exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('comments', (table) => {
      table.increments('id').primary().unsigned()
      table.string('content')
      table.integer('post_id').unsigned()
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('comments')
  ])
)
