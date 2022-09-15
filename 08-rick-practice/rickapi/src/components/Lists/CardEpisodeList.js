import CardEpisode from "../CardEpisode/cardEpisode";
import styles from "../Lists/CardList.module.scss";

const EpisodeList = ({ data }) => {
  return (
    <div>
      <h1 className={styles.h1}>The Rick and Morty API</h1>
      <div>
        {data.map((info) => {
          return (
            <CardEpisode
              key={info.id}
              name={info.name}
              air_date={info.air_date}
              episode={info.episode}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EpisodeList;
