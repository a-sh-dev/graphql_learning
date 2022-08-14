// Fetch example
const fetch = require("node-fetch");

const BASE_URL = "https://odyssey-lift-off-rest-api.herokuapp.com";

const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    // tracksForHome: (parent, args, context, info) => {}
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },

    // fetch example
    tracksForHomeFetch: async () => {
      const baseUrl = BASE_URL;
      const res = await fetch(`${baseUrl}/tracks`);
      return res.json();
    },
  },

  Track: {
    // using fetch
    author: async ({ authorId }, _, { dataSources }) => {
      const baseUrl = BASE_URL;
      const res = await fetch(`${baseUrl}/author/${authorId}`);
      return res.json();
    },

    // using dataSources
    // author: ({ authorId }, _, { dataSources }) => {
    //   return dataSources.trackAPI.getAuthor(authorId);
    // },
  },
};

module.exports = resolvers;
