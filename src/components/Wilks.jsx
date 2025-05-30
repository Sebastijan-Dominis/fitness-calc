import { useState } from "react";
import { wilks2020 } from "powerlifting-formulas";

import Select from "./Select";
import Measurement from "./Measurement";
import Result from "./Result";

function Wilks() {
  const [sex, setSex] = useState("male");
  const [unit, setUnit] = useState("metric");
  const [bodyWeight, setBodyWeight] = useState();
  const [benchMax, setBenchMax] = useState();
  const [squatMax, setSquatMax] = useState();
  const [deadliftMax, setDeadliftMax] = useState();

  const weightUnit = unit === "metric" ? "kg" : "lbs";

  const total = Number(benchMax) + Number(squatMax) + Number(deadliftMax);
  const totalKG = unit === "metric" ? total : total * 0.453592;

  const bodyWeightKG = unit === "metric" ? bodyWeight : bodyWeight * 0.453592;

  let score = null;
  if (
    sex &&
    Number.isFinite(bodyWeightKG) &&
    Number.isFinite(totalKG) &&
    bodyWeightKG > 0 &&
    totalKG > 0
  ) {
    score = wilks2020(bodyWeightKG, totalKG, sex);
  } else {
    score = null;
  }

  return (
    <div className="calcContainer">
      <Select
        title={"Choose your sex"}
        unit={sex}
        onHandleUnitChange={(e) => setSex(e.target.value)}
        options={["male", "female"]}
      />
      <Select
        title={"Choose a unit"}
        unit={unit}
        onHandleUnitChange={(e) => setUnit(e.target.value)}
        options={["metric", "imperial"]}
      />
      <Measurement
        title={`Your bodyweight (${weightUnit})`}
        unitValue={bodyWeight}
        onSetValue={setBodyWeight}
        placeholder={`Your bodyweight (${weightUnit})`}
      />
      <Measurement
        title={`Your bench press 1RM (${weightUnit})`}
        unitValue={benchMax}
        onSetValue={setBenchMax}
        placeholder={`Your one rep max on bench press (in ${weightUnit})`}
      />
      <Measurement
        title={`Your squat 1RM (${weightUnit})`}
        unitValue={squatMax}
        onSetValue={setSquatMax}
        placeholder={`Your one rep max on squat (in ${weightUnit})`}
      />
      <Measurement
        title={`Your deadlift 1RM (${weightUnit})`}
        unitValue={deadliftMax}
        onSetValue={setDeadliftMax}
        placeholder={`Your one rep max on deadlift (in ${weightUnit})`}
      />
      <Result results={[score]}>
        Your Wilks coefficient (new 2020 version) is {score}
      </Result>
    </div>
  );
}

export default Wilks;
