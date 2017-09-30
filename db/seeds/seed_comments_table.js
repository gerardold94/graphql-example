const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('comments').del().then(() => {
    const promises = Array(40).fill().map((_, i) => {
      return knex('comments').insert([{
        id: i + 1,
        content: casual.sentences(2),
        post_id: casual.integer(1, 10)
      }])
    })

    return Promise.all(promises)
  })
}
