import React from 'react';
import { Grid } from '@mui/material';
import BasicCard from '../../../uiParts/card/BasicCard';
import { useSelector } from 'react-redux';
import { selectDaily } from '../../../../stores/slices/covid19/covid19Slice';
import CountUp from 'react-countup';

const Cards: React.FC = () => {
  const daily = useSelector(selectDaily);

  return (
    <>
      <Grid item md={3} sm={4} xs={8}>
        <BasicCard title="Infected persons" leftBorderColor="#4aa1f6">
          <CountUp start={0} end={daily[daily.length - 1].Confirmed} duration={1.5} separator="," />
        </BasicCard>
      </Grid>
      <Grid item md={3} sm={4} xs={8}>
        <BasicCard title="Recovered persons" leftBorderColor="#5eb47f">
          <CountUp start={0} end={daily[daily.length - 1].Recovered} duration={1.5} separator="," />
        </BasicCard>
      </Grid>
      <Grid item md={3} sm={4} xs={8}>
        <BasicCard title="Dead persons" leftBorderColor="#c54369">
          <CountUp start={0} end={daily[daily.length - 1].Deaths} duration={1.5} separator="," />
        </BasicCard>
      </Grid>
    </>
  );
};

export default Cards;
