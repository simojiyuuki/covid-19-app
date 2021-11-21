import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectDaily } from '../../../../stores/slices/covid19/covid19Slice';

const LineChart: React.FC = () => {
  const daily = useSelector(selectDaily);
  const dates = daily.map(({ Date }) => Date);
  const data = {
    labels: dates.map(date => new Date(date).toDateString()),
    datasets: [
      {
        label: 'Infected', // 感染者数
        data: daily.map(data => data.Confirmed),
        borderColor: '#3333ff',
        showLine: false
      },
      {
        label: 'Recoverd', // 回復者数
        data: daily.map(data => data.Recovered),
        borderColor: '#7cc44b',
        showLine: false
      },
      {
        label: 'Deaths', // 死亡者数
        data: daily.map(data => data.Deaths),
        borderColor: '#ff3370',
        showLine: false
      }
    ]
  };

  return (
    <$LineGrid item md={5} sm={10} xs={10}>
      <Line data={data}></Line>
    </$LineGrid>
  );
};

const $LineGrid = styled(Grid)`
  margin: 16px;
`;

export default LineChart;
