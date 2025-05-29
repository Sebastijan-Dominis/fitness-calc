import styles from "./Result.module.css";

function Result({ results, children }) {
  const valid = !results
    .map(
      (result) =>
        result !== "NaN" && result !== "Infinity" && result !== Infinity
    )
    .includes(false);

  return (
    <>
      {valid && (
        <div className={styles.resultContainer}>
          <h3 className={styles.result}>{children}</h3>
        </div>
      )}
    </>
  );
}

export default Result;
