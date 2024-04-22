import { MOVIE_TYPE, MOVIE_SORT_BY } from "./../../../api/utils/constants";

const Category = ({ setSelectedGenre, setSelectedSort }) => {
  const handleGenreChange = (event) => {
    const { value } = event.target;
    setSelectedGenre(value);
  };

  const handleSortChange = (event) => {
    const { value } = event.target;
    setSelectedSort(value);
  };

  return (
    <div className="form">
      <div className="form-center">
        <label htmlFor="genre">Genres:</label>
        <select id="genre" name="genre" onChange={handleGenreChange}>
          <option value="">All Genres</option>
          {Object.values(MOVIE_TYPE).map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <label htmlFor="sort">Sort By:</label>
        <select id="sort" name="sort" onChange={handleSortChange}>
          <option value="">Default</option>
          {Object.values(MOVIE_SORT_BY).map((sortBy) => (
            <option key={sortBy} value={sortBy}>
              {sortBy}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Category;
