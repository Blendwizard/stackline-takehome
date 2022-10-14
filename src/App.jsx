import React from "react";
import logo from '../docs/images/stackline_logo.svg';
import ProductPage from "./features/product/ProductPage.jsx";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo}></img>
    </div>
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