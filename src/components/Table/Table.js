import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from './DataTable';
import ActionMenu from './ActionMenu';
import CountryFlag from '../CountryFlag';
import Status from '../Status';

const usd = 10;
const headerClass = 'h-30 bg-slate-100';
function Table({ data }) {
  const columns = [
    {
      field: 'transaction_date',
      headerName: 'Transaction Date',
      type: 'string',
      headerClassName: headerClass,
      width: 150,
    },
    {
      field: 'invoice_no',
      headerName: 'Invoice No.',
      type: 'string',
      headerClassName: headerClass,
      width: 245,
      renderCell: (params) => (
        <Link
          className='underline text-blue-500'
          to={`/transaction/${params.value}`}
        >
          {params.value}
        </Link>
      ),
    },

    {
      field: 'payer',
      headerName: 'Payer',
      headerClassName: headerClass,
      type: 'string',
      width: 225,
      valueFormatter: (params) => {
        if (params.value.name == null) {
          return '';
        }
        return params.value.name;
      },
      renderCell: (params) => CountryFlag(params.field, params.row),
    },
    {
      field: 'payee',
      headerName: 'Payee',
      type: 'string',
      headerClassName: headerClass,
      width: 225,
      valueFormatter: (params) => {
        if (params.value.name == null) {
          return '';
        }
        return params.value.name;
      },
      renderCell: (params) => CountryFlag(params.field, params.row),
    },
    {
      field: 'amount',
      headerName: 'Amount',
      type: 'string',
      headerClassName: headerClass,
      width: 130,
      valueFormatter: (params) => {
        if (params.value == null) {
          return '';
        }
        return '₹' + params.value.toFixed();
      },
    },
    {
      headerName: 'USD Equivalent',
      type: 'string',
      headerClassName: headerClass,
      width: 160,
      valueGetter: (params) => {
        if (params.row.amount == null) {
          return '';
        }
        return params.row.amount;
      },
      valueFormatter: (params) => {
        if (params.value == null) {
          return '';
        }
        return '$' + (params.value * usd).toFixed(2);
      },
    },
    {
      field: 'status',
      headerName: 'Status',
      headerClassName: headerClass,
      width: 225,
      renderCell: (params) => Status(params.value),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerClassName: headerClass,
      width: 78,
      sortable: false,
      align: 'center',
      headerAlign: 'center',
      hideable: false,
      renderCell: (params) => ActionMenu(params.row),
    },
  ];
  return (
    <DataTable
      columns={columns}
      data={data ? data : []}
      getId={(row) => row.invoice_no}
    />
  );
}

export default Table;
