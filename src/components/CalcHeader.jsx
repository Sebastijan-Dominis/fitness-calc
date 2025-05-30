import styles from "./CalcHeader.module.css";
import { useNavigate } from "react-router-dom";

import MainBtn from "./MainBtn";

function CalcHeader({ title }) {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <div onClick={() => navigate("/")}>
        <MainBtn height="2.5rem" width="6rem" className={styles.backBtn}>
          &larr; Back
        </MainBtn>
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>Choose what you want to calculate</p>
    </div>
  );
}

export default CalcHeader;
