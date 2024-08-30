import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

// Import necessary components from Chart.js
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,   // Import CategoryScale
  LinearScale,     // Import LinearScale
  PointElement,    // Import PointElement
  Title as ChartTitle,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ChartTitle,
  Tooltip,
  Legend
);

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimeStamp = [];

  // Correct loop to handle timestamps and prices
  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.push(parseFloat(coinHistory.data.history[i].price));
    console.log(coinHistory.data.history[i].timestamp);
    coinTimeStamp.push(new Date(coinHistory.data.history[i].timestamp * 1000).toLocaleDateString());
  };
  const data = {
    labels: coinTimeStamp.reverse(),
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      y: { // Updated syntax for scales in Chart.js v3
        ticks: {
            beginAtZero: true,
          },
      },
    },
  };

  return (
    <>
      <Row className='chart-header'>
        <Title level={2} className='chart-title'>{coinName} Price Chart</Title>
        <Col className='price-container'>
          <Title level={5} className='price-change'>{coinHistory?.data?.change}%</Title>
          <Title level={5} className='current-price'>Current {coinName} Price: ${currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
