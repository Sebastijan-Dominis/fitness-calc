import styles from "./Measurement.module.css";

function Measurement({ title, unitValue, onSetValue, placeholder = null }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.measurementTitle}>{title ? title : ""}</h2>
      <input
        type="number"
        value={unitValue}
        onChange={(e) => onSetValue(Number(e.target.value))}
        placeholder={placeholder}
        className={styles.measurementBtn}
      />
    </div>
  );
}

export default Measurement;
