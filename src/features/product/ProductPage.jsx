import React from "react";
import Counter from "../counter/Counter.jsx";

const SideBar = () => {

  return (
    <div className="sidebar">
      <div className="product-details-container">
        <div className="product-img"></div>
        <div className="product-summary"></div>
      </div>
      <div className="btn-group">
        <button className="option-btn">Pantry</button>
        <button className="option-btn">Obsolete</button>
        <button className="option-btn">Blender</button>
        <button className="option-btn">Lightning Deal</button>
      </div>
    </div>
  )
}

const ProductPage = () => {

  return (
    <div className="product-display">
      <div className="horizontal-content">
        <SideBar></SideBar>
        <div className="vertical-content">
          <div className="line-graph-container"></div>
          <div className="table-container"></div>
        </div>
      </div>
    </div>

  )
};

export default ProductPage;

