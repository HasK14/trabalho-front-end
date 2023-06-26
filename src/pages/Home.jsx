import "./Home.css";
import SearchInput from "../components/SearchInput";
import { useEffect, useState } from "react";

const Home = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (text) {
      fetch(`https://api.jikan.moe/v4/anime?q=${text}`);
    }
  }, [text]);

  return (
    <div>
      <header>
        <h1>Animes</h1>
        <SearchInput value={text} onChange={(search) => setText(search)} />
      </header>
      <div className="container"></div>
    </div>
  );
};

export default Home;
