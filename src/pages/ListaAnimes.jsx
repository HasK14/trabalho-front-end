import "./AnimeList.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";
import Pagination from "../components/Pagination";

const ListaAnimes = () => {
  const [animes, setAnimes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();

  const navigateToSearch = () => {
    navigate("/buscar");
  };

  const navigateToList = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime?&page=${currentPage}`
        );
        const animeList = response.data.data;

        const totalPages = response.data.pagination.last_visible_page;

        setAnimes(animeList);
        setTotalPages(totalPages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAnimes();
  }, [currentPage]);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="rodape">
        <FaHome
          onClick={navigateToList}
          className="icon"
          title="Ir para a Lista de Animes"
        ></FaHome>
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
            <a
              href={`https://myanimelist.net/anime/${anime.mal_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={anime.images.jpg.image_url} alt="Imagem Anime" />
            </a>
            <div className="title">{anime.title}</div>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </div>
  );
};

export default ListaAnimes;
