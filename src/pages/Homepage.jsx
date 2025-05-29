import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

import Header from "../components/Header";

function Homepage() {
  return (
    <>
      <Header />
      <div className={styles.btnContainer}>
        <Link to={"/fat"}>Fat Calculators</Link>
        <Link>Strength Calculators</Link>
      </div>
    </>
  );
}

export default Homepage;
