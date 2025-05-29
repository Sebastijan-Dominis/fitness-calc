import { useState } from "react";

import Select from "./Select";
import Measurement from "./Measurement";
import Result from "./Result";

function FFMI() {
  const [unit, setUnit] = useState("metric");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bodyFatPercentage, setBodyFatPercentage] = useState(0);

  const weightInLbs = unit === "metric" ? weight * 2.204623 : weight;
  const heightInIn = unit === "metric" ? height * 0.3937008 : height;

  const weightUnit = unit === "metric" ? "kg" : "lbs";
  const heightUnit = unit === "metric" ? "cm" : "in";

  function handleUnitChange(e) {
    setUnit(e.target.value);
    setWeight(0);
    setHeight(0);
    setBodyFatPercentage(0);
  }

  // fat free mass
  const FFM = weightInLbs * (1 - bodyFatPercentage / 100);
  const FFMI = (FFM / 2.2 / (heightInIn * 0.0254) ** 2).toFixed(2);
  const adjustedFFMI = Number(
    Number(FFMI) + 6.3 * (1.8 - heightInIn * 0.0254)
  ).toFixed(2);

  return (
    <div className="calcContainer">
      <Select
        title={"Choose a unit"}
        unit={unit}
        onHandleUnitChange={(e) => handleUnitChange(e)}
        options={["metric", "imperial"]}
      />
      <Measurement
        title={`Weight (${weightUnit})`}
        unitValue={weight}
        onSetValue={(e) => setWeight(e)}
      />
      <Measurement
        title={`Height (${heightUnit})`}
        unitValue={height}
        onSetValue={(e) => setHeight(e)}
      />
      <Measurement
        title={"Body fat percentage"}
        unitValue={bodyFatPercentage}
        onSetValue={setBodyFatPercentage}
      />
      <Result results={[FFMI, adjustedFFMI]}>
        Your FFMI is {FFMI}. Your adjusted FFMI is {adjustedFFMI}.
      </Result>
    </div>
  );
}

export default FFMI;
