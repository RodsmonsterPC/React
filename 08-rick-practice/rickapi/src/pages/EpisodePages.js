import { useState, useEffect } from "react";
import EpisodeList from "../components/Lists/CardEpisodeList";

const EpisodeCard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const fetchData = () => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Error al obtener datos</div>;
  }

  return <EpisodeList data={data} />;
};

export default EpisodeCard;
