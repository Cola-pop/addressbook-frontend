import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import MaterialTable from 'material-table';
import { useSelector } from 'react-redux';

import addAddressAPI from '../../api/addresses/addAddress';
import deleteAddressAPI from '../../api/addresses/deleteAddress';
import updateAddressAPI from '../../api/addresses/updateAddress';

const TableView = (props) => {
  const [columns] = useState([
    { title: 'Name', field: 'firstName' },
    { title: 'Surname', field: 'surname' },
    { title: 'Phone', field: 'phone' },
    { title: 'Email', field: 'email' },
  ]);

  const [addresses, setAddresses] = useState(
    useSelector((state) => state.addresses.addressesData)
  );

  const [editableAddressData, setEditableAddressData] = useState(
    addresses.map((addr) => ({ ...addr }))
  );

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
          data={editableAddressData}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setEditableAddressData([...editableAddressData, newData]);
                  addAddressAPI(newData);

                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...editableAddressData];
                  const index = oldData.tableData.id;

                  updateAddressAPI(dataUpdate[index]._id, newData);
                  dataUpdate[index] = newData;
                  setEditableAddressData([...dataUpdate]);

                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...editableAddressData];
                  const index = oldData.tableData.id;

                  deleteAddressAPI(dataDelete[index]._id);
                  dataDelete.splice(index, 1);
                  setEditableAddressData([...dataDelete]);

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
