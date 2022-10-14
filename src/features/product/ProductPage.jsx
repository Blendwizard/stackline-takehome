import React, {useEffect} from "react";
import Counter from "../counter/Counter.jsx";
import mock_api_response from "../../data/mock_api.js";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductData, productSelector } from "./productSlice.js";



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

const ProductPage = () => {
  const dispatch = useDispatch();
  const { data, loading, hasError } = useSelector(productSelector);

  useEffect(() => {
    dispatch(fetchProductData())
  }, []);

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

