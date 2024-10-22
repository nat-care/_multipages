import Counter from "./components/Counter/Counter";
import Timer from "./components/Timer/Timer";
import Add from "./components/Add/Add";
import Temperatures from "./components/Temperatures/Temperatures";

import "./Components.css";

function Components() {
  return (
    <div className="components-container">
      <div className="components-title">
        <h2 className="badge bg-dark">REACT COMPONENNTS</h2>
      </div>
      <div className="components-block">
        <div className="block-1">
          <div className="block-1-1">
            <Counter />
            <Timer />
          </div>
          <div className="block-1-2">
            <Add />
          </div>
        </div>
        <div className="block-2">
          <Temperatures />
        </div>
      </div>
      <div className="components-name">
        <div className="badge bg-dark">
          <h3>นางสาว ณัฐธิชา ลาสองชั้น รหัส66070195</h3>
        </div>
      </div>
    </div>
  );
}

export default Components;
