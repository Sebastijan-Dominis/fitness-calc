import { NavLink } from "react-router";
import styles from "./Choice.module.css";

const calculators = ["BMI", "BodyFat", "FFMI"];

function Choice() {
  return (
    <div>
      <ul className={styles.choice}>
        {calculators.map((calc) => (
          <li key={calc}>
            <NavLink to={calc.toLowerCase()}>{calc}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Choice;
