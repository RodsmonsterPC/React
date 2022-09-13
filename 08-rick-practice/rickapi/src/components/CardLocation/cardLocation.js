import styles from "./CardLocation.module.scss";
const CardEpisode = (props) => {
  const name = props.name;
  const type = props.type;
  const dimension = props.dimension;

  return (
    <div className={styles.cardContainer}>
      <section>
        <div className={styles.infoName}>
          <h2>{name}</h2>
          <div className={styles.infoStatus}>
            <span>{type}</span>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <span className={styles.colorSpan}>{dimension}</span>
        </div>
      </section>
    </div>
  );
};

export default CardEpisode;
