const casual = require('casual')
const User = require('./models/User')
const Post = require('./models/Post')
const Comment = require('./models/Comment')

const resolvers = {
  Query: {
    users: () => User.query().eager('[posts, posts.comments]'),
    posts: () => Post.query().eager('comments'),
    user: (rootValue, args) => User.query().findById(args.id).eager('[posts, posts.comments]'),
    post: (rootValue, args) => Post.query().findById(args.id).eager('comments'),
    comment: (rootValue, args) => Comment.query().findById(args.id)
  }
}

module.exports = resolvers