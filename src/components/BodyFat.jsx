import { useState } from "react";

import Select from "./Select";
import Measurement from "./Measurement";
import Result from "./Result";

function Bodyfat() {
  const [sex, setSex] = useState("male");
  const [unit, setUnit] = useState("metric");

  const [neck, setNeck] = useState();
  const [waist, setWaist] = useState();
  const [height, setHeight] = useState();
  const [hip, setHip] = useState();

  const measurementUnit = unit === "metric" ? "cm" : "in";

  function handleSexChange(e) {
    setNeck();
    setWaist();
    setHip();
    setHeight();
    setSex(e.target.value);
  }

  function handleUnitChange(e) {
    setNeck();
    setWaist();
    setHip();
    setHeight();
    setUnit(e.target.value);
  }

  const bf =
    sex === "male"
      ? Number(
          (
            495 /
              (1.0324 -
                0.19077 * Math.log10(waist - neck) +
                0.15456 * Math.log10(height)) -
            450
          ).toFixed(2)
        )
      : Number(
          (
            495 /
              (1.29579 -
                0.35004 * Math.log10(waist + hip - neck) +
                0.221 * Math.log10(height)) -
            450
          ).toFixed(2)
        );

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
        placeholder={"At narrowest"}
      />
      <Measurement
        unitValue={waist}
        onSetValue={setWaist}
        title={`Waist circumference (${measurementUnit})`}
        placeholder={sex === "male" ? "At navel" : "At narrowest"}
      />
      <div className={sex === "male" && "twoCols"}>
        <Measurement
          unitValue={height}
          onSetValue={setHeight}
          title={`Height (${measurementUnit})`}
          placeholder={`Your height in ${measurementUnit}`}
        />
      </div>
      {sex === "female" && (
        <Measurement
          unitValue={hip}
          onSetValue={setHip}
          title={`Hip circumference (${measurementUnit})`}
          placeholder={"At widest"}
        />
      )}
      <Result results={[bf]}>Your Bodyfat percentage is {bf}%.</Result>
    </div>
  );
}

export default Bodyfat;
