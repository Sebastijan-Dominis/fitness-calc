import styles from "./Measurement.module.css";

function Measurement({
  title,
  unitValue,
  onSetValue,
  placeholder = null,
  customClass = "",
}) {
  return (
    <div className={`${styles.container} ${customClass}`}>
      <h2 className={styles.measurementTitle}>{title ? title : ""}</h2>
      <input
        type="number"
        value={unitValue ?? ""}
        onChange={(e) => {
          onSetValue(
            e.target.value === "" ? undefined : Number(e.target.value)
          );
        }}
        placeholder={placeholder}
        className="calcElement"
      />
    </div>
  );
}

export default Measurement;
