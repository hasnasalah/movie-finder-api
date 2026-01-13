require("dotenv").config();
const jsonplaceholderClient = require('../services/api-client');
async function searchMovies(req, res) {
  try {
    const searchTerm = req.query.title;

    if (!searchTerm) {
      return res.status(404).json({ error: "Title query parameter is required"});
    }

    const response = await jsonplaceholderClient.get("/", {
      params: {
        s: searchTerm,
         apikey: process.env.OMDB_API_KEY
      }
    });

    res.json(response.data);

  } catch (error) {
    res.status(500).json({ error: "Failed to search movies" });
  }
}

async function getMovieDetails(req, res) {
  try {
    const id = req.params.id;

    const response = await jsonplaceholderClient.get("/", {
      params: {
        i: id,
         apikey: process.env.OMDB_API_KEY
      }
    });

    res.json(response.data);

  } catch (error) {
    res.status(500).json({ error: "Failed to display movie details" });
  }
}
module.exports={
    getMovieDetails,
    searchMovies
}