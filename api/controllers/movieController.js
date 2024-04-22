const dotenv = require("dotenv");
dotenv.config();
const MongoClient = require("mongodb").MongoClient;

exports.getMoviesByCategory = async (req, res) => {
  try {
    const { search, genres, sort } = req.query;
    let genresArray = Array.isArray(genres) ? genres : genres ? [genres] : [];
    const queryObject = {};

    if (search) {
      queryObject.$or = [
        { title: { $regex: search, $options: "i" } },
        {
          genres: { $all: genresArray.map((genre) => new RegExp(genre, "i")) },
        },
      ];
    }
    if (genres && genres.length > 0 && genres[0] !== "all") {
      queryObject.genres = { $all: genresArray };
    }

    const sortOptions = {
      "a-z": { title: 1 },
      "z-a": { title: -1 },
    };

    const sortKey = sortOptions[sort];

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const client = await MongoClient.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
    });
    const db = client.db("test");

    const totalMovies = await db
      .collection("movies")
      .countDocuments(queryObject);
    const numOfPages = Math.ceil(totalMovies / limit);

    const movies = await db
      .collection("movies")
      .find(queryObject)
      .sort(sortKey)
      .skip(skip)
      .limit(limit)
      .toArray();

    res.json({ totalMovies, numOfPages, currentPage: page, movies });

    client.close();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
