import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/">
        Inicio
      </Link>
      <Link className={styles.link} to="article">
        Articles
      </Link>
      <Link className={styles.link} to="catalogo">
        Catalogo
      </Link>
      <Link className={styles.link} to="user">
        User
      </Link>
    </nav>
  );
};

export default Navbar;
