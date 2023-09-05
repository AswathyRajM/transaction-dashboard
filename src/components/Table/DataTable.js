import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import SortImg from '../../images/sorting-default.png';
import SortAscImg from '../../images/sorting-asc.png';
import SortDescImg from '../../images/sorting-desc.png';

export function SortedDescendingIcon() {
  return <img width={17} src={SortDescImg} className='icon scale-110' />;
}

export function SortedAscendingIcon() {
  return <img width={17} src={SortAscImg} className='icon scale-110' />;
}

export function UnsortedIcon() {
  return <img width={17} src={SortImg} className='icon scale-110' />;
}

function DataTable({ getId, data, columns, isLoading }) {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        autoHeight
        slots={{
          columnSortedDescendingIcon: SortedDescendingIcon,
          columnSortedAscendingIcon: SortedAscendingIcon,
          columnUnsortedIcon: UnsortedIcon,
        }}
        sx={{
          '.MuiDataGrid-iconButtonContainer': {
            visibility: 'visible',
          },
          '.MuiDataGrid-sortIcon': {
            opacity: 'inherit !important',
          },
          boxShadow: 2,
        }}
        disableColumnMenu
        getRowId={getId}
        rows={data}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 20 } },
        }}
      />
    </div>
  );
}

export default DataTable;
