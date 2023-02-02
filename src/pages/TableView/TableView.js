import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import MaterialTable from 'material-table';
import { useSelector } from 'react-redux';

import addAddressAPI from '../../api/addresses/addAddress';
import deleteAddressAPI from '../../api/addresses/deleteAddress';
import updateAddressAPI from '../../api/addresses/updateAddress';

const TableView = (props) => {
  const [addresses, setAddresses] = useState(
    useSelector((state) => {
      return state.adr.addressesData;
    })
  );

  const [columns, setColumns] = useState([
    { title: 'Name', field: 'firstName' },
    { title: 'Surname', field: 'surname' },
    { title: 'Phone', field: 'phone' },
    { title: 'Email', field: 'email' },
  ]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MaterialTable
          title='Addresses'
          options={{
            exportButton: true,
            exportAllData: true,
          }}
          columns={columns}
          data={addresses}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setAddresses([...addresses, newData]);
                  addAddressAPI(newData);

                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...addresses];
                  const index = oldData.tableData.id;
                  updateAddressAPI(dataUpdate[index]._id, dataUpdate[index]);
                  dataUpdate[index] = newData;
                  setAddresses([...dataUpdate]);

                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...addresses];
                  const index = oldData.tableData.id;
                  deleteAddressAPI(dataDelete[index]._id);
                  dataDelete.splice(index, 1);
                  setAddresses([...dataDelete]);

                  resolve();
                }, 1000);
              }),
          }}
        />
      </Grid>
    </Grid>
  );
};

export default TableView;
