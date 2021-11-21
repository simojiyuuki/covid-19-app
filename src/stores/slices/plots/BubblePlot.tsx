import React from 'react';
import { Bubble } from 'react-chartjs-2';

const data = {
  datasets: [
    {
      label: 'React',
      data: [
        {
          x: 20,
          y: 866,
          r: 63
        }
      ],
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'transparent'
    },
    {
      label: 'Angular',
      data: [
        {
          x: 30,
          y: 389,
          r: 41
        }
      ],
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'transparent'
    },
    {
      label: 'Vue',
      data: [
        {
          x: 10,
          y: 749,
          r: 13
        }
      ],
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'transparent'
    }
  ]
};

const options = {
  title: {
    display: true,
    fontSize: 18,
    text: 'NPM downloads comparison (global)'
  },
  scales: {
    xAxes: [
      {
        scaleLabel: {
          display: true,
          label: 'Number of job offer in LinkedIn (Japan)',
          fontSize: 18
        },
        ticks: {
          min: 5,
          max: 35,
          fontSize: 14
        }
      }
    ],
    yAxes: [
      {
        scaleLabel: {
          display: true,
          label: 'Learning Cost',
          fontSize: 18
        },
        ticks: {
          min: 0,
          max: 1300,
          fontSize: 14
        }
      }
    ]
  }
};

const BubblePlot: React.FC = () => {
  return (
    <div>
      <Bubble data={data} options={options} />
    </div>
  );
};

export default BubblePlot;
