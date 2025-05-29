import { useState } from "react";

import Select from "./Select";
import Measurement from "./Measurement";
import Result from "./Result";

function Bodyfat() {
  const [sex, setSex] = useState("male");
  const [unit, setUnit] = useState("metric");

  const [neck, setNeck] = useState(0);
  const [waist, setWaist] = useState(0);
  const [height, setHeight] = useState(0);
  const [hip, setHip] = useState(0);

  const measurementUnit = unit === "metric" ? "cm" : "in";

  function handleSexChange(e) {
    setNeck(0);
    setWaist(0);
    setHip(0);
    setHeight(0);
    setSex(e.target.value);
  }

  function handleUnitChange(e) {
    setNeck(0);
    setWaist(0);
    setHip(0);
    setHeight(0);
    setUnit(e.target.value);
  }

  const bf =
    sex === "male"
      ? (
          495 /
            (1.0324 -
              0.19077 * Math.log10(waist - neck) +
              0.15456 * Math.log10(height)) -
          450
        ).toFixed(2)
      : (
          495 /
            (1.29579 -
              0.35004 * Math.log10(waist + hip - neck) +
              0.221 * Math.log10(height)) -
          450
        ).toFixed(2);

  return (
    <div className="calcContainer">
      <Select
        title={"Choose your sex"}
        unit={sex}
        onHandleUnitChange={handleSexChange}
        options={["male", "female"]}
      />

      <Select
        title={"Choose a unit"}
        unit={unit}
        onHandleUnitChange={handleUnitChange}
        options={["metric", "imperial"]}
      />
      <Measurement
        unitValue={neck}
        onSetValue={setNeck}
        title={`Neck circumference (${measurementUnit})`}
      />
      <Measurement
        unitValue={waist}
        onSetValue={setWaist}
        title={`Waist circumference (${measurementUnit})`}
      />
      <div className={sex === "male" && "twoCols"}>
        <Measurement
          unitValue={height}
          onSetValue={setHeight}
          title={`Height (${measurementUnit})`}
        />
      </div>
      {sex === "female" && (
        <Measurement
          unitValue={hip}
          onSetValue={setHip}
          title={`Hip circumference (${measurementUnit})`}
        />
      )}
      <Result results={[bf]}>Your Bodyfat percentage is {bf}%.</Result>
    </div>
  );
}

export default Bodyfat;
