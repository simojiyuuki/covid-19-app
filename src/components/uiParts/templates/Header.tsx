import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Grid } from '@material-ui/core';

type Props = {
  daily: string;
};

const Header: React.FC<Props> = ({ daily }: Props) => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar variant="dense">
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <div>
            <Typography variant="h6" color="inherit" component="div">
              Covid-19 Live Dashboard
            </Typography>
          </div>
          <div>
            <Typography variant="body1" color="inherit" component="div">
              {daily}
            </Typography>
          </div>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
