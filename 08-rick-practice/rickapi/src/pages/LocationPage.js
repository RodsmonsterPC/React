import { useState, useEffect } from "react";
import LocationList from "../components/Lists/CardLocationList";

const LocationCard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const fetchData = () => {
    fetch("https://rickandmortyapi.com/api/location")
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

  return <LocationList data={data} />;
};

export default LocationCard;
