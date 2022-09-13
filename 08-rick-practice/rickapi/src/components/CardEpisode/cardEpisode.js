import styles from "./CardEpisode.module.scss";
const CardEpisode = (props) => {
  const title = props.name;
  const subTitle = props.air_date;
  const nameEpisode = props.episode;

  return (
    <div className={styles.cardContainer}>
      <section>
        <div className={styles.infoName}>
          <h2>{title}</h2>
          <div className={styles.infoStatus}>
            <span>{subTitle}</span>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <span className={styles.colorSpan}>{nameEpisode}</span>
        </div>
      </section>
    </div>
  );
};

export default CardEpisode;
