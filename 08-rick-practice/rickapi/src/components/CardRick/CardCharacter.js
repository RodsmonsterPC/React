import styles from "./cardRick.module.scss";
import statusOk from "../images/status.png";
import statusDeath from "../images/status_busy.png";
import statusUnknown from "../images/status_offline.png";

const CardRick = (props) => {
  const name = props.name;
  const status = props.status;
  const species = props.species;
  const origin = props.origin;
  const location = props.location;
  const image = props.image;
  const imageStatus = {
    Alive: statusOk,
    Dead: statusDeath,
    unknown: statusUnknown,
  };

  return (
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
          <small>{location}</small>
        </div>
        <div className={styles.infoContainer}>
          <span className={styles.colorSpan}>First seen in:</span>
          <small>{origin}</small>
        </div>
      </section>
    </div>
  );
};

export default CardRick;
