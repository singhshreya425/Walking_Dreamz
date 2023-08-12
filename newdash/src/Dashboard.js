
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import './Dashboard.css'; 

const Dashboard = () => {
  const [covidData, setCovidData] = useState([]);
  const [showChart, setShowChart] = useState(false);

  const getcoviddata = async () => {
    try {
      const response = await axios.get("https://data.covid19india.org/data.json");
      setCovidData(response.data.statewise);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getcoviddata();
  }, []); 

  const toggleChart = () => {
    setShowChart(prevShowChart => !prevShowChart);
  };

  // Chart data and options setup
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
    <div className="dashboard">
      <h1>Live</h1>
      <h2>Covid-19 Dashboard</h2>

      <button onClick={toggleChart}>
        {showChart ? "Hide Chart" : "Show Chart"}
      </button>

      <table className="table">
        <thead>
          <tr>
            <th>State</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {covidData.map((stateData, index) => (
            <tr key={index}>
              <td>{stateData.state}</td>
              <td>{stateData.confirmed}</td>
              <td>{stateData.active}</td>
              <td>{stateData.recovered}</td>
              <td>{stateData.deaths}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showChart && (
        <div className="chart-container">
          <h3>COVID-19 Chart</h3>
          <Bar data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
}

export default Dashboard;

