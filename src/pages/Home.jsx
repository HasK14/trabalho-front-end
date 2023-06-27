import "./Home.css";
import SearchInput from "../components/SearchInput";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [animes, setAnimes] = useState({});
  const [searchText, setSearchText] = useState("");

  const handleSearch = (search) => {
    setSearchText(search);
  };

  useEffect(() => {
    if (searchText) {
      axios
        .get(`https://api.jikan.moe/v4/anime?q=${searchText}`)
        .then((response) => {
          setAnimes(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [searchText]);

  return (
    <div>
      <header className="headerHome">
        <h1>Animes</h1>
        <SearchInput onSearch={handleSearch} />
      </header>
      {animes.data && (
        <ul className="animeList">
          {animes.data.map((anime) => (
            <li key={anime.id}>
              <img src={anime.images.jpg.image_url} alt="Imagem Anime" />
              {anime.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
