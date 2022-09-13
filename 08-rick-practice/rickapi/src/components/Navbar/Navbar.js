import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="character">
        Characters
      </Link>
      <Link className={styles.link} to="episode">
        Episodes
      </Link>
      <Link className={styles.link} to="location">
        Locations
      </Link>
    </nav>
  );
};

export default Navbar;
