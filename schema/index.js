const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
const resolvers = require('../resolvers')
const User = require('./User')
const Post = require('./Post')

const rootQuery = `
  type Query {
    users: [User]
    posts: [Post]
    user(
      # id of a user to retrive
      id: Int
    ): User
    post(id: Int): Post
    comment(id: Int): Comment
  }
`

const schema = makeExecutableSchema({
  typeDefs: [rootQuery, User, Post],
  resolvers
})

module.exports = schema