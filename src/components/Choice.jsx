import styles from "./Choice.module.css";
import { NavLink } from "react-router";

import MainBtn from "./MainBtn";

function Choice({ calculators }) {
  return (
    <div>
      <ul className={styles.choice}>
        {calculators.map((calc) => (
          <li key={calc[1]}>
            <NavLink to={calc[1]}>
              {({ isActive }) => (
                <MainBtn isActive={isActive}>{calc[0]}</MainBtn>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Choice;
