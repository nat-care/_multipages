import Variable from "../Variable/Variable";
import "./Temperatures.css";
import {  useEffect, useState } from "react";

function Temperatures() {
    const [celsius, setCelsius] = useState(25);
    const [fahrenheit, setFahrenheit] = useState(77);
    const [kelvin, setKelvin] = useState(298.15);
    const [source, setSource] = useState('celsius'); 

    useEffect(() => {
        if (source === 'celsius') {
            setFahrenheit((celsius * 9 / 5) + 32);
            setKelvin(celsius + 273.15);
        }
    }, [celsius]);

    useEffect(() => {
        if (source === 'fahrenheit') {
            setCelsius((fahrenheit - 32) * 5 / 9);
            setKelvin(((fahrenheit - 32) * 5 / 9) + 273.15);
        }
    }, [fahrenheit]);

    useEffect(() => {
        if (source === 'kelvin') {
            setCelsius(kelvin - 273.15);
            setFahrenheit(((kelvin - 273.15) * 9 / 5) + 32);
        }
    }, [kelvin]);

    function CelsiusChange  (value) {
      setSource('celsius'); 
        setCelsius(parseFloat(value));
  };

    function FahrenheitChange (value) {
      setSource('fahrenheit'); 
      setFahrenheit(parseFloat(value));
  };

    function KelvinChange (value) {
      setSource('kelvin');
        setKelvin(parseFloat(value));
  };

  return (
    <div className="temperatures-container">
      <h3 className="temperatures-title">Temperatures</h3>
      <h3 className="temperatures-display">
        <span className="badge bg-primary">{celsius.toFixed(2)}C</span>
        <span className="badge bg-primary">{fahrenheit.toFixed(2)}F</span> 
        <span className="badge bg-primary">{kelvin.toFixed(2)}K</span>
      </h3>
      <div className="temperatures-variable">
        <Variable name={"Celsius"} value={celsius} setValue={CelsiusChange} />
        <Variable name={"Fahrenheit"} value={fahrenheit} setValue={FahrenheitChange} />
        <Variable name={"Kelvin"} value={kelvin} setValue={KelvinChange} />
      </div>
    </div>
  );
}

export default Temperatures;
