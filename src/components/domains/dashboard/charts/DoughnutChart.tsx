import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectDaily } from '../../../../stores/slices/covid19/covid19Slice';

const DoughnutChart: React.FC = () => {
  const daily = useSelector(selectDaily);
  const motality = (100 * daily[daily.length - 1].Deaths) / daily[daily.length - 1].Confirmed;
  const data = {
    labels: ['Infected', 'Recoverd', 'Deaths'],
    datasets: [
      {
        data: [daily[daily.length - 1].Confirmed, daily[daily.length - 1].Recovered, daily[daily.length - 1].Deaths],
        backgroundColor: ['rgba(0, 0, 255, 0.5)', '#008080', 'rgba(255, 0, 0, 0.5)'],
        hoverBackgroundColor: ['#36A2EB', '#3cb371', '#FF6384'],
        borderColor: ['transparent', 'transparent', 'transparent']
      }
    ]
  };
  return (
    <$DoughnutGrid item md={6} sm={10} xs={10}>
      <Typography align="center" color="textSecondary" gutterBottom>
        Motarity {motality.toFixed(2)} [%]
      </Typography>
      {daily[0] && (
        <Doughnut
          data={data}
          options={{
            legend: {
              position: 'bottom',
              labels: {
                boxWidth: 15
              }
            }
          }}
        />
      )}
    </$DoughnutGrid>
  );
};

const $DoughnutGrid = styled(Grid)`
  margin-top: 16px;
`;

export default DoughnutChart;
