import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Filler, CategoryScale, plugins } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Filler, CategoryScale);

const TransactionChart = () => {
  const data = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    datasets: [
      {
        label: 'Total Transactions',
        data: [400, 800, 300, 1000, 400, 800, 300, 1000, 400, 800, 300, 1000, 400, 800, 300, 1000, 400, 800, 300, 1000, 400, 800, 300, 1000, 400, 800, 300, 1000],
        borderColor: '#1E88E5',
        backgroundColor: 'rgba(30, 136, 229, 0.2)',
        pointBackgroundColor: 'transparent',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'transparent',
        // pointBorderWidth:4,
        fill: true,
        tension: .5 ,// This controls the curve of the line. Adjust as needed.
      }
    ]
  };

  const options = {
    plugins : {
      legend: false
    },
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        
        max: 2000,
        ticks: {
          stepSize: 500
        },
        grid: {
          color: '#e5e5e5'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        padding: 10,
        backgroundColor: '#1E88E5',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
        callbacks: {
          label: function(context) {
            return ` ${context.raw}`;
          },
          labelColor: function(context) {
            return {
              borderColor: '#1E88E5',
              backgroundColor: '#1E88E5',
              borderWidth: 2,
              borderDash: [2, 2],
              borderRadius: 4
            };
          }
        }
      },
      legend: {
        display: false
      }
    },
    elements: {
      point: {
        radius: 5,
        hoverRadius: 8,
      }
    }
  };

  return (
    <div style={{ padding: '20px', background: '#fff', borderRadius: '10px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}>
      <h4 style={{paddingBottom:'10px'}}>Total - Transaction</h4>
      <Line data={data} options={options} />
    </div>
  );
};

export default TransactionChart;