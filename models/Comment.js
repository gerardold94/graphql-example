const { Model } = require('objection')
const path = require('path')

class Comment extends Model {
  static get tableName () {
    return 'comments'
  }

  static get relationMappings () {
    return {
      post: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, '/Post'),
        join: {
          from: 'comments.post_id',
          to: 'posts.id'
        }
      }
    }
  }
}

module.exports = Comment
