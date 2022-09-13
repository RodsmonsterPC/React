import CardLocation from "../CardLocation/cardLocation";
import styles from "./CardLocation.module.scss";

const LocationList = ({ data }) => {
  return (
    <div>
      <h1 className={styles.h1}>The Rick and Morty API</h1>
      <div>
        {data.map((info) => {
          return (
            <CardLocation
              key={info.id}
              name={info.name}
              type={info.type}
              dimension={info.dimension}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LocationList;
