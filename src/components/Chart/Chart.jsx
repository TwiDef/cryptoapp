import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Flex } from 'antd';
import { useSelector } from 'react-redux';
ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const { assets } = useSelector(state => state.crypto_data)
  const data = {
    labels: assets.map((asset) => asset.id),
    datasets: [
      {
        label: '$',
        data: assets.map((asset) => asset.totalAmount),
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <Flex
      style={{ marginTop: "2rem", height: "600px" }}
      align="center"
      justify="center">
      <Pie data={data} />
    </Flex>

  );
};

export default Chart;