import styles from "./CalcHeader.module.css";
import { useNavigate } from "react-router-dom";

function CalcHeader() {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <button onClick={() => navigate("/")} className={styles.backBtn}>
        &larr; Back
      </button>
      <h1 className={styles.title}>Fat Calculators</h1>
      <p className={styles.description}>Choose what you want to calculate</p>
    </div>
  );
}

export default CalcHeader;
