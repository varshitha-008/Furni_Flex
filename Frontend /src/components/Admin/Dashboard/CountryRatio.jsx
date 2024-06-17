import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const CountryRatio = ({
  labels,
  data_1,
  backgroundColor_1,
  cutout = 50,
  legends = true,
  offset = []
}) => {
  const data = {
    labels,
    datasets: [
      {
        data: data_1,
        backgroundColor: backgroundColor_1,
        borderWidth: 0,
        offset,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: legends,
        position: 'bottom',
        labels: {
          padding: 20,
        },
      },
    },
    cutout,
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default CountryRatio;
