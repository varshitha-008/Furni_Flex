import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HorizontalGraph = ({
  data_1 = [],
  title_1,
  bgColor_1,
  horizontal = false,
  labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
}) => {
  const options = {
    responsive: true,
    indexAxis: horizontal ? 'y' : 'x',
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: bgColor_1,
      },
    ],
  };

  return <Bar data={data} options={options} />;
};

export default HorizontalGraph;
