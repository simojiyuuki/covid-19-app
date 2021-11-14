import React from 'react';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';
import media from '../../app/styles/media';

const MaterialUI: React.FC = () => {
  return (
    <div>
      <Typography color="secondary" variant="h1" align="left" gutterBottom noWrap>
        Hello UI Hello UI Hello UI Hello UI Hello UI Hello UI Hello UI Hello UI Hello UI Hello UI Hello UI Hello UI
        Hello UI Hello UI Hello UI Hello UI
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <$Paper>xs=12</$Paper>
        </Grid>
      </Grid>
      <$Button variant="contained" color="primary">
        Contained
      </$Button>
    </div>
  );
};

const $Button = styled(Button)`
  ${media.pc`
    background: green;
    padding: 3px 50px;
  `}
  ${media.tb`
    background: red;
    padding: 3px 50px;
  `}
  ${media.mb`
    background: blue;
    padding: 3px 50px;
  `}
`;

const $Paper = styled(Paper)`
  background: orange;
  padding: 50px;
`;
export default MaterialUI;
