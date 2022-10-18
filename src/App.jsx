import React, { useState } from "react";
import "./App.css";
import PriceComponent from "./components/PriceComponent";
import Toggle from "./components/Toggle";

const App = () => {
  const [isToggleAnnual, setIsToggleAnnual] = useState(true);

  return (
    <div className="wrapper">
      <h1 className="main-title">Our Pricing</h1>
      <Toggle
        isToggleAnnual={isToggleAnnual}
        setIsToggleAnnual={() => setIsToggleAnnual((prev) => !prev)}
      />
      <PriceComponent isToggleAnnual={isToggleAnnual} />
    </div>
  );
};

export default App;
