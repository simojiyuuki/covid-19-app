import React from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';

const labels = ['Red', 'Blue', 'Yellow'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
      hoverOffset: 4
    }
  ]
};

const PiePlot: React.FC = () => {
  return (
    <div>
      <Pie data={data} />
      <Doughnut data={data} />
    </div>
  );
};

export default PiePlot;
