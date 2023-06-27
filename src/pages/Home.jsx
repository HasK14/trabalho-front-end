import "./Home.css";
import SearchInput from "../components/SearchInput";
import { useEffect, useState } from "react";

const Home = () => {
  const [animes, setAnimes] = useState({});
  const [searchText, setSearchText] = useState("");

  const handleSearch = (search) => {
    setSearchText(search);
  };

  useEffect(() => {
    if (searchText) {
      fetch(`https://api.jikan.moe/v4/anime?q=${searchText}`)
        .then((response) => response.json())
        .then((response) => {
          setAnimes(response);
          console.log(response);
        });
    }
  }, [searchText]);

  return (
    <body>
      <header>
        <h1>Animes</h1>
        <SearchInput onSearch={handleSearch} />
      </header>
      <div className="container">
        {animes.data && (
          <ul className="animeList">
            {animes.data.map((anime) => (
              <li key={anime.id}>
                <img src={anime.images.jpg.image_url} />
                {anime.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </body>
  );
};

export default Home;
