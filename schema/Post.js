module.exports = `
	# This is a post
	type Post {
	  id: ID!
	  # Title of the post
	  title: String!
	  content: String!
	  # List of comments for every post
	  comments: [Comment]
	}

	# This is a comment
	type Comment {
	  # This is an unique ID
	  id: ID!
	  # Content of the comment
	  content: String!
	}
`