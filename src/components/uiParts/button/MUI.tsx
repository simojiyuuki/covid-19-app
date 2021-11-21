import React from 'react';
import { Grid, Paper } from '@mui/material';
import styled from 'styled-components';
import media from '../../../styles/media';

// MaterialUI_v5(MaterialUI=>MUI命名変更)
const MUI: React.FC = () => {
  return (
    <_MuiContainer>
      <Grid container spacing={3} direction="column">
        <$Grid item xs={12} container>
          <$Grid item xs={2}>
            <$Paper>xs=2</$Paper>
          </$Grid>
          <$Grid item xs={8}>
            <$Paper>xs=8</$Paper>
          </$Grid>
          <$Grid item xs={2}>
            <$Paper>xs=2</$Paper>
          </$Grid>
        </$Grid>
        <$Grid item xs={12} container justifyContent="space-between">
          <$Grid item xs={3}>
            <$Paper>xs=3</$Paper>
          </$Grid>
          <$Grid item xs={3}>
            <$Paper>xs=3</$Paper>
          </$Grid>
          <$Grid item xs={3}>
            <$Paper>xs=3</$Paper>
          </$Grid>
        </$Grid>
      </Grid>
    </_MuiContainer>
  );
};

const _MuiContainer = styled.div`
  ${media.pc`
    background: gray;
    padding: 3px 50px;
  `}
  ${media.tb`
    background: cyan;
    padding: 3px 50px;
  `}
  ${media.mb`
    background: greenyellow;
    padding: 3px 50px;
  `}
`;

const $Grid = styled(Grid)`
  background-color: black;
  padding: 5px;
  align-items: center;
`;

const $Paper = styled(Paper)`
  background-color: orange;
  padding: 30px;
`;

export default MUI;
