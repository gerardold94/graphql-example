const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('posts').del().then(() => {
    const promises = Array(10).fill().map((_, i) => {
      return knex('posts').insert([{
        id: i + 1,
        title: casual.words(2),
        content: casual.sentences(3),
        user_id: casual.integer(1, 10)
      }])
    })

    return Promise.all(promises)
  })
}
