import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@mui/material/Typography';

const EmptyAddressesSection = (props) => {
  return (
    <Grid container direction='column' spacing={2}>
      <Grid item xs={12}>
        <Typography>
          You don't seem to have addresses yet, start by clicking the button
          above!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default EmptyAddressesSection;
