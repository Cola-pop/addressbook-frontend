import React from 'react';
import Grid from '@material-ui/core/Grid';

import AddressCard from '../AddressCard/AddressCard';
import deleteAddressAPI from '../../api/addresses/deleteAddress';
import updateAddressAPI from '../../api/addresses/updateAddress';
import './AddressCardSection.scss';

const AddressCardSection = (props) => {
  const { addresses, updateData, showSpinnerHandler, hideSpinnerHandler } =
    props;

  const onSaveHandler = async (id, newAddressData) => {
    try {
      showSpinnerHandler();
      const updatedAddress = await updateAddressAPI(id, newAddressData);
      hideSpinnerHandler();

      updateData();
      return updatedAddress.data.success;
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteHandler = async (id) => {
    try {
      showSpinnerHandler();
      const deletedAddress = await deleteAddressAPI(id);

      updateData();
      return deletedAddress.data.success;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container spacing={2}>
      {addresses.map((address) => {
        return (
          <AddressCard
            key={address._id}
            address={address}
            saveAddress={onSaveHandler}
            deleteAddress={onDeleteHandler}
          />
        );
      })}
    </Grid>
  );
};

export default AddressCardSection;
