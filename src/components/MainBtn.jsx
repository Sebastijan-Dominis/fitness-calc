import styles from "./MainBtn.module.css";

function MainBtn({ isActive, children, width = "14rem", height = "4rem" }) {
  return (
    <button
      className={`${styles.mainBtn} ${isActive ? styles.mainBtnActive : ""}`}
      style={{ width: width, height: height }}
    >
      {children}
    </button>
  );
}

export default MainBtn;
