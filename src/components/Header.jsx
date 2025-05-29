import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Fitness Calc</h1>
      <p className={styles.description}>All fitness calculators in one place</p>
    </div>
  );
}

export default Header;
