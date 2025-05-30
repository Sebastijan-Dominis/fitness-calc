import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import MainBtn from "../components/MainBtn";

function Homepage() {
  return (
    <>
      <Header />
      <div className={styles.btnContainer}>
        <Link to={"/fat"}>
          <MainBtn>Fat Calculators</MainBtn>
        </Link>
        <Link to={"/strength"}>
          <MainBtn>Strength Calculators</MainBtn>
        </Link>
      </div>
    </>
  );
}

export default Homepage;
