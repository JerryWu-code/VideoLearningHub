const fs = require('fs');
const express = require('express');
const { ApolloServer, UserInputError } = require('apollo-server-express');
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const { connectToDb } = require('./db.js');
let db;

// Add user
async function addUser(_, { User }) {
  console.log("Adding user", User);
  async function getNextSequence(email) {
    const result = await db.collection('counters').findOneAndUpdate(
      { _id: email },//find the entry that matches this _id
      { $inc: { current: 1 } }, //perform the update
      { returnOriginal: false },//do not return the old value, only updated counter value.
    );
    return result.value.current;
  }
  try {
    // Get the next available ID
    User.id = await getNextSequence('fixedindex');
    // Insert the ticket into the travellers collection
    const result = await db.collection('users').insertOne(User);

    // Return the inserted traveler
    return result.ops[0];
  } catch (err) {
    // Handle duplicate key error (typically if user already exists)
    if (err.code === 11000) {
      console.error('Duplicate user ID:', err);
      throw new UserInputError('User with this ID already exists.', {
        extensions: { code: 'BAD_USER_INPUT' }
      });
    }

    // Log unexpected errors for debugging
    console.error('Error adding user:', err);

    // Throw a more specific error message for better debugging
    throw new Error(`Error adding user. Details: ${err.message}`);
  }
}

const resolvers = {
  Mutation: {
    addUser,
  },
};

const app = express();

const server = new ApolloServer({
  typeDefs: fs.readFileSync('./server/userschema.graphql', 'utf-8'),
  resolvers,
  formatError: error => {
    console.log(error);
    return error;
  },
});
server.applyMiddleware({ app, path: '/graphql' });


(async function () {
  try {
    db = await connectToDb();
    app.listen(8000, function () {
      console.log('App started on port 8000');
    });
  } catch (err) {
    console.log('ERROR:', err);
  }
})();