import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@mui/material/Typography';
import isEmail from 'validator/lib/isEmail';

import './AddressCard.scss';

const AddressCard = (props) => {
  const { address, saveAddress, deleteAddress } = props;

  const [warningText, setWarningText] = useState('Everything up to date');
  const [changes, setChanges] = useState(false);
  const [phone, setPhone] = useState(address.phone);
  const [email, setEmail] = useState(address.email);
  const [emailIsValid, setEmailIsValid] = useState(true);

  const handleEmailChange = (val) => {
    if (isEmail(val)) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }

    setEmail(val);
  };

  const onSaveClickHandler = async () => {
    const isSaved = await saveAddress(address._id, phone, email);

    if (isSaved) {
      setWarningText('Everything up to date');
      setChanges(false);
    }
  };

  const onDeleteClickHandler = async () => {
    await deleteAddress(address._id);
  };

  return (
    <Grid item xs={12} md={4}>
      <Card className='card'>
        <CardActionArea>
          <CardContent>
            <Typography
              className={changes ? 'redWarningText' : 'blueWarningText'}
            >
              {warningText}
            </Typography>
            <Typography>
              Contact Name: {`${address.firstName} ${address.surname}`}
            </Typography>
            <FormControl>
              <TextField
                label='Phone'
                value={phone}
                onChange={(e) => {
                  setWarningText('Changes unsaved!');
                  setChanges(true);
                  setPhone(e.target.value);
                }}
              />
              <TextField
                label='Email'
                value={email}
                onChange={(e) => {
                  setWarningText('Changes unsaved!');
                  setChanges(true);
                  handleEmailChange(e.target.value);
                }}
                error={!emailIsValid}
                helperText={!emailIsValid ? 'Invalid email.' : ''}
              />
            </FormControl>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container justifyContent='center'>
            <Grid item>
              <label>
                <Button
                  component='span'
                  size='small'
                  color='primary'
                  onClick={onSaveClickHandler}
                  disabled={phone === '' || !emailIsValid}
                >
                  Save
                </Button>
              </label>
            </Grid>
            <Grid item>
              <label>
                <Button
                  component='span'
                  size='small'
                  color='primary'
                  onClick={onDeleteClickHandler}
                >
                  Delete
                </Button>
              </label>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default AddressCard;
