import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@material-ui/core/Grid';
import TextField from '@mui/material/TextField';
import isEmail from 'validator/lib/isEmail';

import addAddressAPI from '../../api/addresses/addAddress';

const AddAddressSection = (props) => {
  const { updateData, showSpinnerHandler } = props;

  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setFirstName('');
    setSurname('');
    setPhone('');
    setEmail('');
    setDialogOpen(false);
  };

  const saveAddressHandler = async () => {
    try {
      showSpinnerHandler();
      await addAddressAPI({ firstName, surname, phone, email });

      updateData();
      setDialogOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailChange = (val) => {
    if (isEmail(val)) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }

    setEmail(val);
  };

  return (
    <>
      <Grid container spacing={2} direction='row' justifyContent='flex-start'>
        <Grid item>
          <Button
            variant='outlined'
            endIcon={<AddIcon />}
            onClick={handleDialogOpen}
          >
            new address
          </Button>
        </Grid>
      </Grid>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Add a new address</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add an address to your address book, enter all the required
            information below.
          </DialogContentText>
          <Grid container>
            <Grid item xs={12} md={6}>
              <TextField
                autoFocus
                margin='dense'
                label='Name'
                type='text'
                variant='standard'
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                autoFocus
                margin='dense'
                label='Surname'
                type='text'
                variant='standard'
                value={surname}
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                autoFocus
                margin='dense'
                label='Phone'
                type='text'
                variant='standard'
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                autoFocus
                margin='dense'
                label='Email Address'
                type='email'
                variant='standard'
                value={email}
                onChange={(e) => {
                  handleEmailChange(e.target.value);
                }}
                error={!emailIsValid && email !== ''}
                helperText={
                  !emailIsValid && email !== '' ? 'Invalid email.' : ''
                }
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button
            onClick={saveAddressHandler}
            disabled={
              firstName === '' ||
              surname === '' ||
              phone === '' ||
              !emailIsValid
            }
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddAddressSection;
