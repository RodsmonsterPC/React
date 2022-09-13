import { useState, useEffect } from "react";
import CardList from "../components/Lists/CardList";

const CharacterPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const fetchData = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setData(data.results))
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
  return <CardList data={data} />;
};

export default CharacterPage;
