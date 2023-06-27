import "./Home.css";
import SearchInput from "../components/SearchInput";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";

const Home = () => {
  const [animes, setAnimes] = useState({});
  const [searchText, setSearchText] = useState("");

  const animeListRef = useRef(null);

  const navigate = useNavigate();

  const navigateToSearch = () => {
    navigate("/buscar");
  };

  const navigateToList = () => {
    navigate("/");
  };

  const handleSearch = (search) => {
    setSearchText(search);
  };

  useEffect(() => {
    const scrollToAnimeList = () => {
      animeListRef.current.scrollIntoView({ behavior: "smooth" });
    };

    if (searchText) {
      axios
        .get(`https://api.jikan.moe/v4/anime?q=${searchText}`)
        .then((response) => {
          setAnimes(response.data);
          console.log(response.data);
          scrollToAnimeList();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [searchText]);

  return (
    <div>
      <div className="rodape">
        <FaSearch
          onClick={navigateToSearch}
          className="icon"
          title="Buscar Anime"
        ></FaSearch>
        <FaHome
          onClick={navigateToList}
          className="icon"
          title="Ir para a Lista de Animes"
        ></FaHome>
      </div>
      <header className="headerHome">
        <h1>Animes</h1>
        <SearchInput onSearch={handleSearch} />
      </header>
      <div ref={animeListRef}>{/* Lista de animes */}</div>
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
