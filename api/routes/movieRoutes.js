const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");
const checkToken = require("../middleware/token");

router.get("/movies", checkToken, movieController.getMoviesByCategory);

module.exports = router;
