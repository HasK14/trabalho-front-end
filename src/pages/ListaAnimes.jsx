import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ListaAnimes = () => {
  const [animes, setAnimes] = useState([]);

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
