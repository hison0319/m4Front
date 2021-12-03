import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from "prop-types";

const LineChart = ({
  chartData
}) => {
  useEffect(() => {
    // console.log('LineChart is rendering!')
  })

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: chartData.label,
        fill: false,
        lineTension: 0.1,
        backgroundColor: chartData.backgroundColor,
        borderColor: chartData.borderColor,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: chartData.borderColor,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: chartData.borderColor,
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 20,
        pointRadius: 3,
        pointHitRadius: 10,
        data: chartData.data
      },
      // {
      //     label: 'prev week',
      //     fill: false,
      //     lineTension: 0.1,
      //     backgroundColor: 'rgba(252,121,161,0.4)',
      //     borderColor: 'rgba(252,121,161,0.4)',
      //     borderCapStyle: 'butt',
      //     borderDash: [],
      //     borderDashOffset: 0.0,
      //     borderJoinStyle: 'miter',
      //     pointBorderColor: 'rgba(252,121,161,0.4)',
      //     pointBackgroundColor: '#fff',
      //     pointBorderWidth: 1,
      //     pointHoverRadius: 5,
      //     pointHoverBackgroundColor: 'rgba(252,121,161,0.4)',
      //     pointHoverBorderColor: 'rgba(220,220,220,1)',
      //     pointHoverBorderWidth: 5,
      //     pointRadius: 1,
      //     pointHitRadius: 10,
      //     data: [45, 32, 23, 54, 77, 67, 56]
      //   }
    ],
  };
  
  return (
    <div>
        <Line data={data} />
    </div>
  );
};

LineChart.propTypes = {
  chartData: PropTypes.object,
};

export default LineChart;