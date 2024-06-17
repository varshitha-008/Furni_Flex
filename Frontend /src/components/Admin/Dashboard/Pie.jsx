import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Box } from '@chakra-ui/react';

// Ensure Chart.js components are registered
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const PieChart1 = ({ labels, data_1, backgroundColor_1, offset }) => {
  const piechartData = {
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

  const piechartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
      },
    },
  };

  return (
    <Box w="100%">
      <Pie data={piechartData} options={piechartOptions} />
    </Box>
  );
};

const Piee = () => {
  return (
    <div style={{ width: "300px", height: "400px", marginLeft: "300px" }}>
      <PieChart1
        labels={["processing", "Register", "Final"]}
        data_1={[12, 9, 13]}
        backgroundColor_1={["green", "lightgreen", "yellowgreen"]}
      />
      <h2 style={{ marginLeft: "90px" }}>Order Fulfilment Ratio</h2>
    </div>
  )
}

export default Piee;
