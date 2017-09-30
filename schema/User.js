module.exports = `
	# This is an user
  type User {
    id: ID!
    name: String!
    nationality: String
    gender: Gender
    posts: [Post]
  }

  enum Gender {
    MASCULINO
    FEMENINO
  }
`