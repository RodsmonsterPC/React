import { useState } from "react";
import { Link } from "react-router-dom";
import CardCharacter from "../CardRick/CardCharacter";
import styles from "./CardList.module.scss";

const CardList = ({ data }) => {
  const [status, setStatus] = useState("all");

  const setAlive = () => setStatus("Alive");

  const setDead = () => setStatus("Dead");

  const setUnknown = () => setStatus("unknown");

  const setAll = () => setStatus("all");

  return (
    <div>
      <h1 className={styles.h1}>The Rick and Morty API</h1>
      <div>
        <button onClick={setAlive}>Alive</button>
        <button onClick={setDead}>Dead</button>
        <button onClick={setUnknown}>Unknown</button>
        <button onClick={setAll}>All</button>

        {data.map((info) => {
          if (info.status === status || status === "all") {
            return (
              <Link className={styles.link} to={`/character/${info.id}`}>
                <CardCharacter
                  key={info.id}
                  name={info.name}
                  status={info.status}
                  species={info.species}
                  origin={info.origin.name}
                  location={info.location.name}
                  image={info.image}
                />
              </Link>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default CardList;
