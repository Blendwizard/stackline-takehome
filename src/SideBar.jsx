import React from "react";
import { useSelector } from 'react-redux';
import { productSelector } from "./features/product/productSlice";

const SideBar = () => {
  const { data, loading, hasError } = useSelector(productSelector);
  console.log(data);
  return (
    <div className="sidebar">
      <div className="product-details-container">
        <div className="product-img">
          <img src={data.image}></img>
        </div>
        <div className="product-summary">
          <h3>{data.title}</h3>
          <p>{data.subtitle}</p>
        </div>
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

export default SideBar;