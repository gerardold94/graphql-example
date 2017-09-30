exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('posts', (table) => {
      table.increments('id').primary().unsigned()
      table.string('title')
      table.string('content')
      table.integer('user_id').unsigned()
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('posts')
  ])
)
