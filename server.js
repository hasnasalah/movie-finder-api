const express=require("express");
const app=express();
require("dotenv").config();
const PORT=process.env.PORT||3001;
const movieRouter = require('./controllers/movieController');

app.use(express.json());
app.use(express.urlencoded());








app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});