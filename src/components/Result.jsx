import styles from "./Result.module.css";

function Result({ results, children }) {
  console.log(results);
  const valid = !results
    .map((result) => Number.isFinite(result))
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
