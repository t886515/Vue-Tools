const { ElementModel } require('../mongodb/mongoose');

//static files for testing Query
const data = require('../data');

const resolvers = {
  Query: {
    title: (obj, args, context) => {
      return 'Static String'
    },
    arrays: (obj, args, context) => {
      return []
    }
  },
  Element: {
    name: (obj, args, context) => {
      return obj
    },
    value: (obj, arg, context) => {
      return obj
    }
  },
  Mutation: {
    saveElement: (obj, args, context) => {
      const { name, value } = args;

      const element = new
    }
  }
};

module.exports = resolvers;
