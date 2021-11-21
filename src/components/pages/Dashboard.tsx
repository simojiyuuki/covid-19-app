import React, { useEffect } from 'react';
import Layout from '../uiParts/templates/Layout';
import Header from '../uiParts/templates/Header';
import { Grid, Container } from '@mui/material';
import styled from 'styled-components';
import SwitchCountry from '../domains/dashboard/country/SwitchCountry';
import Cards from '../domains/dashboard/cards/Cards';
import DoughnutChart from '../domains/dashboard/charts/DoughnutChart';
import LineChart from '../domains/dashboard/charts/LineChart';
import { fetchAsyncGetDaily } from '../../stores/slices/covid19/covid19API';
import { useSelector, useDispatch } from 'react-redux';
import { selectDaily } from '../../stores/slices/covid19/covid19Slice';

/**
 * ダッシュボード
 */
const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const daily = useSelector(selectDaily);

  useEffect(() => {
    dispatch(fetchAsyncGetDaily('japan'));
  }, [dispatch]);

  return (
    <Layout title="covid-19-dashboard">
      <Header daily={new Date(daily[daily.length - 1].Date).toDateString()} />
      <$MainContainer maxWidth="xl">
        <Grid container spacing={1} alignItems="center" justifyContent="center" direction="column">
          <$SwitchGrid>
            <SwitchCountry />
          </$SwitchGrid>
          <$CardsGrid container spacing={5} justifyContent="center">
            <Cards />
          </$CardsGrid>
          <$ChartGrid container spacing={1} alignItems="center" justifyContent="space-around" direction="row">
            <LineChart />
            <DoughnutChart />
          </$ChartGrid>
        </Grid>
      </$MainContainer>
    </Layout>
  );
};

const $MainContainer = styled(Container)`
  /* background: pink; */
  margin-top: 32px;
`;

const $SwitchGrid = styled(Grid)`
  margin-top: 16px;
  /* background: red; */
`;

const $CardsGrid = styled(Grid)`
  /* background: yellow; */
  margin-top: 24px;
`;

const $ChartGrid = styled(Grid)`
  margin-top: 16px;
`;

export default Dashboard;
