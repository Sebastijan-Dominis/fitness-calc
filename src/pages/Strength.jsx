import { Outlet } from "react-router";

import CalcHeader from "../components/CalcHeader";
import Choice from "../components/Choice";

function Strength() {
  return (
    <div>
      <CalcHeader title={"Strength calculators"} />
      <Choice
        calculators={[
          ["One rep max", "1RM"],
          ["Wilks coefficient", "Wilks"],
        ]}
      />
      <Outlet />
    </div>
  );
}

export default Strength;
