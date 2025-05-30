import { useState } from "react";

import Select from "./Select";
import Measurement from "./Measurement";
import Result from "./Result";

function BMI() {
  const [unit, setUnit] = useState("metric");
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();

  function handleUnitChange(e) {
    setUnit(e.target.value);
    setWeight();
    setHeight();
  }

  const heightUnit = unit === "metric" ? "(cm)" : "(in)";
  const weightUnit = unit === "metric" ? "(kg)" : "(lbs)";

  const bmi =
    unit === "metric"
      ? Number((weight / (height / 100) ** 2).toFixed(2))
      : Number(((703 * weight) / height ** 2).toFixed(2));

  return (
    <div className="calcContainer">
      <Select
        title={"Choose a unit"}
        unit={unit}
        onHandleUnitChange={handleUnitChange}
        options={["metric", "imperial"]}
        customClass="twoCols"
      />
      <Measurement
        unitValue={weight}
        onSetValue={setWeight}
        title={`Weight ${weightUnit}`}
        placeholder={"Weight"}
      />
      <Measurement
        unitValue={height}
        onSetValue={setHeight}
        title={`Height ${heightUnit}`}
        placeholder={"Height"}
      />
      <Result results={[bmi]}>Your BMI is {bmi}</Result>
    </div>
  );
}

export default BMI;
