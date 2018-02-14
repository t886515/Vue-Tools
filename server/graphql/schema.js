const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers');

const typeDefs = `
  type Query {
    title: String
    arrays: [Element]
  }

  type Element {
    name: String
    value: Int
  }
  type Mutation {
    saveElement(name: String!, value: Int!): Element
  }
`

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
