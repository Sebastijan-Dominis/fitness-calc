import { BrowserRouter, Routes, Route } from "react-router";
import styles from "./App.module.css";

import Homepage from "./pages/Homepage";
import Fat from "./pages/Fat";
import BMI from "./components/BMI";
import BodyFat from "./components/Bodyfat";
import FFMI from "./components/FFMI";
import Strength from "./pages/Strength";
import OneRepMax from "./components/OneRepMax";
import Wilks from "./components/Wilks";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="fat" element={<Fat />}>
            <Route path="BMI" element={<BMI />}></Route>
            <Route path="BodyFat" element={<BodyFat />}></Route>
            <Route path="FFMI" element={<FFMI />}></Route>
          </Route>
          <Route path="strength" element={<Strength />}>
            <Route path="1RM" element={<OneRepMax />}></Route>
            <Route path="Wilks" element={<Wilks />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
