import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { productSelector } from './features/product/productSlice';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


const LineChart = () => {

  const { data, loading, hasError } = useSelector(productSelector);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const retailSales = data.sales.map((week) => week.retailSales);
  const wholeSales = data.sales.map((week) => week.wholesaleSales);
  const labels = data.sales.map((week) => week.weekEnding);
    console.log(wholeSales)


  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: 'USD ($)'
        },
        max: 2000000,
        min: 1000,
        grid: {
          display: false
        },
        beginAtZero: false,
      },
      x: {
        title: {
          display: true,
          text: 'Year/Month/Day'
        },
        grid: {
          display: false
        },
      }
    },
    elements: {
      point: {
        radius: 0
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
      tooltip: {
        intersect: false,
      },
    },
  };


  const chartData = {
    labels: labels,
    datasets: [
      {

        label: 'Retail Sales',
        data: retailSales,
        lineTension: 0.4,
        borderColor: '#e3875f',
        backgroundColor: '#e3875f',
      },
      {
        label: 'Wholesale',
        data: wholeSales,
        lineTension: 0.4,
        borderColor: '#1aabad',
        backgroundColor: '#1aabad',
      },
    ],
  };


  return (
    <div className='graph-dimensions'>
      <Line options={options} data={chartData} />
    </div>
  )
};

export default LineChart;
