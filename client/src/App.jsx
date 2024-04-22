import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HeaderPage from "./components/Header";
import Center from "./components/Center";
import Category from "./components/Category";

function App() {
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (value) => {
    setSearchTerm(value);
  };

  return (
    <div>
      <HeaderPage handleSearch={handleSearch} />
      <Routes>
        <Route
          index
          element={
            <div>
              <Category
                setSelectedGenre={setSelectedGenre}
                setSelectedSort={setSelectedSort}
              />
              <Center
                selectedGenre={selectedGenre}
                selectedSort={selectedSort}
                searchTerm={searchTerm}
              />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
