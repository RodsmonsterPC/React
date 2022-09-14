import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../components/CardRick/cardRick.module.scss";
import statusOk from "../components/images/status.png";
import statusDeath from "../components/images/status_busy.png";
import statusUnknown from "../components/images/status_offline.png";

const DetailCard = () => {
  const params = useParams();
  const url = `https://rickandmortyapi.com/api/character/${params.characterId}`;
  const imageStatus = {
    Alive: statusOk,
    Dead: statusDeath,
    unknown: statusUnknown,
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((d) => setData(d))
      .catch((e) => console.log("error", e));
  }, [url]);

  if (!data) return <div>Cargando ...</div>;
  const { name, status, species, location, origin, image } = data;
  return (
    <div>
      <div className={styles.cardContainer}>
        <div>
          <img src={`${image}`} alt="icon" />
        </div>
        <section>
          <div className={styles.infoName}>
            <h2>{name}</h2>
            <div className={styles.infoStatus}>
              <img
                className={styles.iconStatus}
                src={imageStatus[status]}
                alt="icon"
              />{" "}
              <span>
                {status}-{species}
              </span>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <span className={styles.colorSpan}>Last known location:</span>
            <small>{location.name}</small>
          </div>
          <div className={styles.infoContainer}>
            <span className={styles.colorSpan}>First seen in:</span>
            <small>{origin.name}</small>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailCard;
