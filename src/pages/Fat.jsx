import { Outlet } from "react-router";

import CalcHeader from "../components/CalcHeader";
import FatChoice from "../components/Choice";

function Fat() {
  return (
    <div>
      <CalcHeader />
      <FatChoice />
      <Outlet />
    </div>
  );
}

export default Fat;
