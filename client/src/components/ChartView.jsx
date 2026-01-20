import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function ChartView({ data }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <p className="no-data-message">No chart data available</p>;
  }

  return (
    <div className="chart-container">
      <Bar
        data={{
          labels: data.map(d => d.day),
          datasets: [
            {
              label: 'Active Users',
              data: data.map(d => d.active),
              backgroundColor: 'rgb(88, 106, 244)',
            },
            {
              label: 'Joined Users',
              data: data.map(d => d.joined),
              backgroundColor: 'rgba(245, 147, 27, 0.98)',
            }
          ]
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false, // allows container to control height
          plugins: {
            legend: {
              position: 'top',
              labels: {
                font: {
                  size: 14,
                }
              }
            },
            tooltip: {
              enabled: true
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                font: {
                  size: 12,
                }
              }
            },
            x: {
              ticks: {
                font: {
                  size: 12,
                }
              }
            }
          }
        }}
      />
    </div>
  );
}
