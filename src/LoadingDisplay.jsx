import React from "react";
import { MoonLoader } from 'react-spinners';

const LoadingDisplay = () => {
  return (
    <div className="loading-status">
      <MoonLoader />
    </div>
  )
};

export default LoadingDisplay;