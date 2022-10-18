import React from "react";
import StyledToggle from "../styled/StyledToggle";

const Toggle = ({ setIsToggleAnnual, isToggleAnnual }) => {
  return (
    <StyledToggle>
      <span className="toggle-text">Annually</span>
      <div className="toggle-container" onClick={setIsToggleAnnual}>
        <div className={`toggle ${isToggleAnnual ? undefined : "active"}`} />
      </div>
      <span className="toggle-text">Monthly</span>
    </StyledToggle>
  );
};

export default Toggle;
