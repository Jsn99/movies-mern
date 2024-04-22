const checkToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    if (bearer[0] === "Bearer" && bearer[1] === "FSMovies2023") {
      next();
    } else {
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(403);
  }
};

module.exports = checkToken;
