const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const schema = require('./schema')

require('./db/setup')

const app = express()

app.use(
  '/api',
  bodyParser.json(),
  graphqlExpress({ schema })
)

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/api'
  })
)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server listen on port: ${PORT}`)
})