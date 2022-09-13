import CardEpisode from "./CardEpisode/cardEpisode";
import styles from "./CardEpisode.module.scss";

const EpisodeList = ({ data }) => {
  return (
    <div>
      <h1 className={styles.h1}>The Rick and Morty API</h1>
      <div>
        {data.map((info) => {
          return (
            <CardEpisode
              key={info.id}
              title={info.title}
              subTitle={info.subTitle}
              nameEpisode={info.nameEpisode}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EpisodeList;
