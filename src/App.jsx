import React from "react";
import ProductPage from "./features/product/ProductPage.jsx";

const NavBar = () => {
  return (
    <div className="navbar"></div>
  )
};

const App = () => {
  return (
    <>
      <div className="global-container">
        <NavBar></NavBar>
        <ProductPage />
      </div>
    </>
  )
};

export default App;