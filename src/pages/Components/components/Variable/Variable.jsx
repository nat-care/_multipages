import { useState } from "react";
import "./Variable.css";
function Variable({type,name, value, setValue}) {
  //   read    write                initial
//   const [value, setValue] = useState(props.value || 0);

  return (
    <div className="variable-container">
      <h3 className="variable-title">{name || 'VALIABLE'}</h3>
      <button className="btn btn-danger" onClick={() => setValue(value - 1)}>
        -
      </button>
      <span className="variable-value">{type && type ==='int' ? value : value.toFixed(2)}</span>
      <button className="btn btn-success" onClick={() => setValue(value + 1)}>
        +
      </button>
    </div>
  );
}

export default Variable;
