import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import MaterialTable from 'material-table';
import { useSelector } from 'react-redux';

const TableView = (props) => {
  const [addresses, setAddresses] = useState(
    useSelector((state) => state.adr.addressesData)
  );

  const [columns, setColumns] = useState([
    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname' },
    { title: 'Phone', field: 'phone' },
    { title: 'Email', field: 'email' },
  ]);

  const [data, setData] = useState([]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MaterialTable
          title='Addresses'
          columns={columns}
          data={data}
          options={{
            exportButton: true,
            exportAllData: true,
          }}
          cellEditable={{
            onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
              return new Promise((resolve, reject) => {
                console.log('newValue: ' + newValue);
                setTimeout(resolve, 1000);
              });
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default TableView;
