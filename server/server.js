const fs = require('fs');
const express = require('express');
const { ApolloServer, UserInputError } = require('apollo-server-express');
const { GraphQLScalarType, Kind } = require('graphql');
const { connectToDb } = require('./db.js');
const cors = require('cors'); // Add CORS for cross-origin requests
let db;

// Define the custom Date scalar
const GraphQLDate = new GraphQLScalarType({
  name: 'GraphQLDate',
  description: 'Custom scalar type for dates',
  parseValue(value) {
    return new Date(value); // Value from the client input
  },
  serialize(value) {
    return value.toISOString(); // Value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value); // Convert hard-coded AST string to Date
    }
    return null;
  },
});

// Add user function
async function addUser(_, { user }) {  // Update parameter name to `user`
  console.log("Adding user", user);

  // Helper function to get the next ID sequence
  async function getNextSequence() {
    const result = await db.collection('counters').findOneAndUpdate(
      { _id: 'fixedindex' },
      { $inc: { current: 1 } },
      { returnOriginal: false }
    );
    return result.value.current;
  }

  try {
    // Get the next available ID
    user.id = await getNextSequence();
    // Insert the user into the users collection
    const result = await db.collection('users').insertOne(user);

    // Return the inserted user
    return result.ops[0];
  } catch (err) {
    // Handle duplicate key error (e.g., if user already exists)
    if (err.code === 11000) {
      console.error('Duplicate user ID:', err);
      throw new UserInputError('User with this ID already exists.', {
        extensions: { code: 'BAD_USER_INPUT' }
      });
    }

    // Log unexpected errors for debugging
    console.error('Error adding user:', err);
    throw new Error(`Error adding user. Details: ${err.message}`);
  }
}

// Define resolvers
const resolvers = {
  GraphQLDate, // Register custom scalar type
  Mutation: {
    addUser,
  },
};

// Set up Express and Apollo Server
const app = express();
app.use(cors()); // Enable CORS

const server = new ApolloServer({
  typeDefs: fs.readFileSync('./server/userschema.graphql', 'utf-8'), // Adjust path if needed
  resolvers,
  formatError: (error) => {
    console.log(error);
    return error;
  },
});

server.applyMiddleware({ app, path: '/graphql' });

// Connect to the database and start the server
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
