import React from "react";
import { useSelector } from "react-redux";
import { productSelector } from "./features/product/productSlice";


const ProductTable = () => {

  const { data, loading, hasError } = useSelector(productSelector);

  return (
    <table>
      <colgroup span="5"></colgroup>
      <thead>
        <tr>
          <th>Week Ending</th>
          <th>Retail Sales</th>
          <th>Wholesale Sales</th>
          <th>Units Sold</th>
          <th>Retail Margin</th>
        </tr>
      </thead>
      <tbody>
        {data.sales.map((week, index)=> {
          return (
            <tr key={index}>
            <td>{week.weekEnding}</td>
            <td>{week.retailSales}</td>
            <td>{week.wholesaleSales}</td>
            <td>{week.unitsSold}</td>
            <td>{week.retailerMargin}</td>
            </tr>
          )
        })}

      </tbody>
    </table>
  )
};

export default ProductTable;