import { BrowserRouter, Routes, Route } from "react-router";
import styles from "./App.module.css";

import Homepage from "./pages/Homepage";
import Fat from "./pages/Fat";
import BMI from "./components/BMI";
import BodyFat from "./components/Bodyfat";
import FFMI from "./components/FFMI";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="fat" element={<Fat />}>
            <Route path="/fat/bmi" element={<BMI />}></Route>
            <Route path="/fat/bodyfat" element={<BodyFat />}></Route>
            <Route path="/fat/ffmi" element={<FFMI />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
