import React from 'react';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';
import media from '../../../styles/media';
import { useMediaQueryContext } from '../../../providers/MediaQueryProvider';

// MaterialUI_v4
const MaterialUI: React.FC = () => {
  const { isMobileSize, isTabletSize, isPcSize } = useMediaQueryContext();

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
        <Grid item xs={12} sm={6} md={3}>
          <$Paper>xs=6</$Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <$Paper>xs=6</$Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <$Paper>xs=6</$Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <$Paper>xs=6</$Paper>
        </Grid>
      </Grid>
      {isMobileSize && (
        <$Button variant="contained" color="primary">
          モバイル
        </$Button>
      )}
      {isTabletSize && (
        <$Button variant="contained" color="primary">
          タブレット
        </$Button>
      )}
      {isPcSize && (
        <$Button variant="contained" color="primary">
          PC
        </$Button>
      )}
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
