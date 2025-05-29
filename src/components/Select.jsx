import styles from "./Select.module.css";

function Select({ title, unit, onHandleUnitChange, options }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <select
        value={unit}
        onChange={onHandleUnitChange}
        className={styles.unitChoice}
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
