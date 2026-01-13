# Movie Finder API

A node.js server API that allows  users to search for movies and fetch detailed movie information using the **OMDb (Open Movie Database) API**.


## Features

*  Search for movies by title.
*  Get detailed information for a specific movie using its ID.
* Built with **Express**, **Axios**, and **dotenv** for environment variable management.



## Project Setup
 

```bash
# clone the repositry in local machine

git clone https://github.com/hasnasalah/movie-finder-api
# Create project directory
mkdir movie-finder-api
cd movie-finder-api

# Initialize Node.js project
npm init -y

# Install dependencies
npm install express axios dotenv
# create .env file to hole the api key and port
 touch .env 
```
### 1. Get Your OMDb API Key

1. Visit [OMDb API](http://www.omdbapi.com/apikey.aspx)  
2. Select the **FREE plan**  
3. Enter your email to receive a unique API key  
4. Add it to a `.env` file in the root of the project:
enter like this : OMDB_API_KEY=your_key_here
and also add 
PORT=?
