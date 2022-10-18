import React from "react";
import StyledPriceComponent from "../styled/StyledPriceComponent";

const PriceComponent = ({ isToggleAnnual }) => {
  return (
    <StyledPriceComponent>
      <div className="price-card basic">
        <p className="card-title">basic</p>
        <p className="price">{isToggleAnnual ? "$199.99" : "$19.99"}</p>
        <div className="features">
          <p className="feature-line">500 GB Storage</p>
          <p className="feature-line">2 Users Allowed</p>
          <p className="feature-line">Send up to 3 GB</p>
        </div>
        <button>
          <span className="btn-text">learn more</span>
        </button>
      </div>
      <div className="price-card professional">
        <p className="card-title">professional</p>
        <p className="price">{isToggleAnnual ? "$249.99" : "$24.99"}</p>
        <div className="features">
          <p className="feature-line">1 TB Storage</p>
          <p className="feature-line">5 Users Allowed</p>
          <p className="feature-line">Send up to 10 GB</p>
        </div>
        <button>
          <span className="btn-text">learn more</span>
        </button>
      </div>
      <div className="price-card master">
        <p className="card-title">master</p>
        <p className="price">{isToggleAnnual ? "$399.99" : "$39.99"}</p>
        <div className="features">
          <p className="feature-line">2 TB Storage</p>
          <p className="feature-line">10 Users Allowed</p>
          <p className="feature-line">Send up to 20 GB</p>
        </div>
        <button>
          <span className="btn-text">learn more</span>
        </button>
      </div>
    </StyledPriceComponent>
  );
};

export default PriceComponent;
