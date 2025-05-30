import styles from "./Select.module.css";

function Select({
  title,
  unit,
  onHandleUnitChange,
  options,
  customClass = "",
}) {
  return (
    <div className={`${styles.container} ${customClass}`}>
      <h2 className={styles.title}>{title}</h2>
      <select
        value={unit}
        onChange={onHandleUnitChange}
        className={`${styles.unitChoice} calcElement`}
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
