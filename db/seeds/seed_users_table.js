const casual = require('casual')

exports.seed = (knex, Promise) => {
  return knex('users').del().then(() => {
    const promises = Array(10).fill().map((_, i) => {
      return knex('users').insert([{
        id: i + 1,
        name: casual.name,
        nationality: casual.country,
        gender: casual.random_element(['MASCULINO', 'FEMENINO'])
      }])
    })

    return Promise.all(promises)
  })
}
