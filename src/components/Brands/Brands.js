import React from "react";
import img1 from "../../images/brand1.jpg";
import img2 from "../../images/brand2.jpg";
import img3 from "../../images/brand3.jpg";
import img4 from "../../images/brand4.png";

const Brands = () => {
  return (
    <div>
      <h1 className="text-center fw-bolder pt-3">TOP BRANDS</h1>
      <div className="container justify-content-around text-center">
        <img src={img1} alt="..." />
        <img src={img2} alt="..." />
        <img src={img3} alt="..." />
        <img src={img4} alt="..." />

      </div>
    </div>
  );
};

export default Brands;
