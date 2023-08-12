import React from 'react';
import { Bar } from 'react-chartjs-2';
import './ChartPage.css'; 

const ChartPage = ({ covidData }) => {

  const stateNames = covidData.map(state => state.state);
  const confirmedCases = covidData.map(state => parseInt(state.confirmed, 10));

  const chartData = {
    labels: stateNames,
    datasets: [
      {
        label: 'Confirmed Cases',
        data: confirmedCases,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: value => value.toLocaleString(),
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: context => `Confirmed: ${context.formattedValue}`,
        },
      },
    },
  };

  return (
    <div className="chart-page">
      <h2 className="chart-heading">Covid-19 Chart</h2>
      <div className="chart-container">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default ChartPage;


