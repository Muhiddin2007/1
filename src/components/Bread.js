import React from "react";

function Bread(props) {
  const { pathBread } = props;
  return (
    <div className="bread">
      <span className="bread-item">
        <p>{pathBread.firstSectionSelect.String}</p>
      </span>
      <span className="bread-item">
        <p>{pathBread.secondSectionSelect}</p>
      </span>
      <span className="bread-item">
        <p>{pathBread.thirdSectionSelect}</p>
      </span>
    </div>
  );
}

export default Bread;
