import React, { useEffect } from "react";
import LineChart from "../../LineChart.jsx";
import ProductTable from "../../ProductTable.jsx";
import SideBar from "../../SideBar.jsx";
import LoadingDisplay from "../../LoadingDisplay.jsx";
import mock_api_response from "../../data/mock_api.js";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductData, productSelector } from "./productSlice.js";



const ProductPage = () => {
  const dispatch = useDispatch();
  const { data, loading, hasError } = useSelector(productSelector);

  useEffect(() => {
    dispatch(fetchProductData())
  }, []);

  const renderView = () => {
    if (loading) return <LoadingDisplay />
    if (hasError) return <p>Cannot display data...</p>

    return (
      <div className="product-display">
        <div className="horizontal-content">
          <SideBar></SideBar>
          <div className="vertical-content">
            <div className="line-graph-container">
              <LineChart />
            </div>
            <div className="table-container">
              <ProductTable />
            </div>
          </div>
        </div>
      </div>
    )
  };

  return (
    <>
      {renderView()}
    </>
  )
};

export default ProductPage;

