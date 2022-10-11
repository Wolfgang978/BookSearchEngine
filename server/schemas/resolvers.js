const { User, Book } = require('../models');

const resolvers = {
  Query: {
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    
  },
  Mutation: {

    addUser: async (parent, { username, email, password}) => {
      return User.create({ username, email, password });
    },

  },
};

module.exports = resolvers;
