import "./AnimeList.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";

const ListaAnimes = () => {
  const [animes, setAnimes] = useState([]);

  const navigate = useNavigate();

  const navigateToSearch = () => {
    navigate("/buscar");
  };

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await axios.get("https://api.jikan.moe/v4/top/anime");
        setAnimes(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAnimes();
  }, []);

  return (
    <div>
      <div className="rodape">
        <FaSearch
          onClick={navigateToSearch}
          className="icon"
          title="Buscar Anime"
        ></FaSearch>
      </div>
      <header className="header">
        <h1>Lista de Animes</h1>
      </header>
      <ul className="animeList">
        {animes.map((anime) => (
          <li key={anime.id}>
            <img src={anime.images.jpg.image_url} alt="Imagem Anime" />
            {anime.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaAnimes;
