import { useState } from "react";
import Select from "./Select";
import Measurement from "./Measurement";
import Result from "./Result";

function OneRepMax() {
  const [unit, setUnit] = useState("metric");
  const [weight, setWeight] = useState();
  const [reps, setReps] = useState();

  const weightUnit = unit === "metric" ? "kg" : "lbs";

  const epleyCoeff = Number((weight * (1 + reps / 30)).toFixed(2));
  console.log(epleyCoeff);

  return (
    <div className="calcContainer">
      <Select
        customClass="twoCols"
        title={"Choose a unit"}
        unit={unit}
        onHandleUnitChange={(e) => setUnit(e.target.value)}
        options={["metric", "imperial"]}
      />
      <Measurement
        title={`Weight lifted (${weightUnit})`}
        unitValue={weight}
        onSetValue={setWeight}
        placeholder={`Weight lifted (${weightUnit})`}
      />
      <Measurement
        title={"Nr. of reps"}
        unitValue={reps}
        onSetValue={setReps}
        placeholder={"Number of repetitions"}
      />
      <Result results={[epleyCoeff]}>
        Your one rep max is {epleyCoeff} {weightUnit}
      </Result>
    </div>
  );
}

export default OneRepMax;
