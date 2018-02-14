const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const bodyParser = require('body-parser');
//parse incoming json object
const schema = required('./graphql/schema');

const cors = require('cors');
//cross-origin-responses fix

const GRAPHQL_PORT = 4000;

const graphQLServer = express();
//starting the server with express fn, can be named by anything

graphQLServer.use(cors());
//use cors

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql'}));

graphQLServer.listen(GRAPHQL_PORT, ()=> {
  console.log(`GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`,
    `GraphQL server is now running on http://localhost:${GRAPHQL_PORT}`);
});
