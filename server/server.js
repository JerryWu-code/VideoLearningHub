const fs = require('fs');
const express = require('express');
const { ApolloServer, UserInputError } = require('apollo-server-express');
const { GraphQLScalarType, Kind } = require('graphql');
const { connectToDb } = require('./db.js');
const cors = require('cors'); // Add CORS for cross-origin requests
let db;

// Helper function to get the next sequence for user ID
async function getNextSequence() {
  try {
    const lastUser = await db.collection('users')
      .find({})
      .sort({ id: -1 }) // Sort in descending order by `id`
      .limit(1) // Get the last traveler (highest `id`)
      .toArray(); // Convert to array

    // If no travelers exist, start with 1; otherwise, increment by 1
    return lastUser.length > 0 ? lastUser[0].id + 1 : 1;
  } catch (err) {
    throw new Error('Error getting next sequence for user ID');
  }
}

async function addUser(_, { user }) {
  try {
    // Check if the user already exists
    const existingUser = await db.collection('users').findOne({ email: user.email });

    if (existingUser) {
      // If the user already exists, return their information
      console.log("User already exists, fetching info:", existingUser);
      return existingUser;
    }

    // Get the next available ID and assign it to the user
    user.id = await getNextSequence();
    console.log("Adding user", user);
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

async function addVideoToCollection(_, { userId, video }) {
  console.log("Adding video to collection for user", userId);
  try {
    await db.collection('users').updateOne(
      { id: userId },
      { $push: { collections: { ...video, addedAt: new Date() } } }
    );
    const updatedUser = await db.collection('users').findOne({ id: userId });
    return updatedUser;
  } catch (err) {
    console.error('Error adding video to collection:', err);
    throw new Error(`Error adding video to collection. Details: ${err.message}`);
  }
}

async function removeVideoFromCollection(_, { userId, videoId }) {
  console.log("Removing video from collection for user", userId);
  try {
    await db.collection('users').updateOne(
      { id: userId },
      { $pull: { collections: { videoId: videoId } } }
    );
    const updatedUser = await db.collection('users').findOne({ id: userId });
    return updatedUser;
  } catch (err) {
    console.error('Error removing video from collection:', err);
    throw new Error(`Error removing video from collection. Details: ${err.message}`);
  }
}

async function addVideoToHistory(_, { userId, video }) {
  console.log("Adding video to history for user", userId);
  try {
    await db.collection('users').updateOne(
      { id: userId },
      { $push: { history: { ...video, watchedAt: new Date() } } }
    );
    const updatedUser = await db.collection('users').findOne({ id: userId });
    return updatedUser;
  } catch (err) {
    console.error('Error adding video to history:', err);
    throw new Error(`Error adding video to history. Details: ${err.message}`);
  }
}

// Define resolvers
const resolvers = {
  Mutation: {
    addUser,
    addVideoToCollection,
    removeVideoFromCollection,
    addVideoToHistory,
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
