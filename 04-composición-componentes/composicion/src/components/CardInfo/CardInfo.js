
import styles from "./CardInfo.module.scss"

const CardInfo = (props) =>{

    const name = props.name
    const status = props.status
    const species = props.species
    const origin = props.origin
    const location = props.location
    const image = props.image

    return(
        <div className={styles.cardContainer}>
            <div>
               <img src={`${image}`} alt="icon" />
            </div>
            <section>
            <div className={styles.infoName}>
            <h2>{name}</h2>
                <span>{status}-{species}</span>
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
    )
}

export default CardInfo