import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { getIn, useFormik } from 'formik';
import * as yup from 'yup';

function TransactionForm({ details, setEdit }) {
  const date = new Date(details.transaction_date).toLocaleDateString('fr-CA');
  const validationSchema = yup.object().shape({
    invoice_no: yup
      .string()
      .required('Required field')
      .matches(/^\w+$/, 'Must be only alphanumeric')
      .min(7, 'Too Short!')
      .max(7, 'Too Long! Maximum 7 letters'),
    amount: yup.number().required('Required field'),
    status: yup.number().required('Required field'),
    transaction_date: yup
      .date()
      .required('Required field')
      .test(
        'valid-age',
        'Cannot select a date in future',
        (date) => new Date().getTime() - new Date(date).getTime() > 0
      ),
    payee: yup.object().shape({
      name: yup
        .string()
        .required('Required field')
        .matches(/^[a-z\d\-_\s]+$/i, 'Must be only alphanumeric')
        .min(2, 'Too Short!')
        .max(20, 'Too Long! Maximum 20 letters'),
      country: yup.string().required('Required field'),
    }),
    payer: yup.object().shape({
      name: yup
        .string()
        .required('Required field')
        .matches(/^[a-z\d\-_\s]+$/i, 'Must be only alphanumeric')
        .min(2, 'Too Short!')
        .max(20, 'Too Long! Maximum 20 letters'),
      country: yup.string().required('Required field'),
    }),
  });

  const handleSave = () => {
    // dispatch(userRegister(formik.values));
    handleClose();
  };

  const formik = useFormik({
    initialValues: { ...details, transaction_date: date },
    validationSchema,
    onSubmit: handleSave,
    validateOnChange: false,
    validateOnBlur: false,
  });

  const handleClose = () => {
    formik.resetForm();
    setEdit(false);
    // dispatch(setDialougOpen());
  };

  useEffect(() => {
    return () => {
      handleClose();
    };
  }, []);

  return (
    <>
      <form noValidate className='flex flex-col'>
        <div className='flex'>
          <FormControl sx={{ m: 2, ml: 0, flex: 3 }}>
            <TextField
              label='Invoice Number'
              helperText={formik.errors.invoice_no}
              error={!!formik.errors.invoice_no}
              fullWidth
              name='invoice_no'
              onChange={formik.handleChange}
              value={formik.values.invoice_no}
            />
          </FormControl>
          <FormControl sx={{ m: 2, mr: 0, flex: 2 }}>
            <TextField
              helperText={formik.errors.transaction_date}
              error={!!formik.errors.transaction_date}
              label='Transaction Date'
              fullWidth
              name='transaction_date'
              type='date'
              value={formik.values.transaction_date}
              InputLabelProps={{ shrink: true, required: true }}
              defaultValue={formik.values.transaction_date}
              onChange={formik.handleChange}
            />
          </FormControl>
        </div>
        <div className='flex'>
          <FormControl sx={{ m: 2, ml: 0, flex: 2 }}>
            <TextField
              label='Amount'
              helperText={formik.errors.amount}
              error={!!formik.errors.amount}
              fullWidth
              name='amount'
              onChange={formik.handleChange}
              value={formik.values.amount}
            />
          </FormControl>
          <FormControl sx={{ m: 2, mr: 0, flex: 1 }} fullWidth>
            <InputLabel id='demo-simple-select-label'>Status</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              label='Status'
              helperText={formik.errors.status}
              error={!!formik.errors.status}
              // fullWidth
              name='status'
              onChange={formik.handleChange}
              value={formik.values.status}
            >
              <MenuItem value={1}>First</MenuItem>
              <MenuItem value={2}>Second</MenuItem>
              <MenuItem value={3}>Third</MenuItem>
            </Select>
          </FormControl>
        </div>

        <Typography sx={{ mt: 1 }}>Payer Information</Typography>

        <div className='flex '>
          <FormControl sx={{ m: 2, ml: 0, flex: 2 }}>
            <TextField
              label='Name'
              helperText={getIn(formik.errors, 'payer.name')}
              error={!!getIn(formik.errors, 'payer.name')}
              fullWidth
              name='payer.name'
              onChange={formik.handleChange}
              value={formik.values.payer.name}
            />
          </FormControl>
          <FormControl sx={{ m: 2, mr: 0, flex: 1 }} fullWidth>
            <InputLabel id='demo-simple-select-label'>Country</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              label='Country'
              helperText={getIn(formik.errors, 'payer.country')}
              error={!!getIn(formik.errors, 'payer.country')}
              fullWidth
              name='payer.country'
              onChange={formik.handleChange}
              value={formik.values.payer.country}
            >
              <MenuItem value='us'>USA</MenuItem>
              <MenuItem value='ca'>Canada</MenuItem>
              <MenuItem value='ind'>India</MenuItem>
              <MenuItem value='au'>Australia</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Typography sx={{ mt: 1 }}>Payee Information</Typography>
        <div className='flex'>
          <FormControl sx={{ m: 2, ml: 0, flex: 2 }}>
            <TextField
              label='Name'
              helperText={getIn(formik.errors, 'payee.name')}
              error={!!getIn(formik.errors, 'payee.name')}
              fullWidth
              name='payee.name'
              onChange={formik.handleChange}
              value={formik.values.payee.name}
            />
          </FormControl>
          <FormControl sx={{ m: 2, mr: 0, flex: 1 }} fullWidth>
            <InputLabel id='demo-simple-select-label'>Country</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              label='Country'
              helperText={getIn(formik.errors, 'payee.country')}
              error={!!getIn(formik.errors, 'payee.country')}
              fullWidth
              name='payee.country'
              onChange={formik.handleChange}
              value={formik.values.payee.country}
            >
              <MenuItem value='us'>USA</MenuItem>
              <MenuItem value='ca'>Canada</MenuItem>
              <MenuItem value='ind'>India</MenuItem>
              <MenuItem value='au'>Australia</MenuItem>
            </Select>
          </FormControl>
        </div>
      </form>
      <button
        onClick={handleSave}
        className='float-right text-sm text-zinc-200 rounded cursor-pointer mt-5 hover:bg-blue-400 bg-blue-500 py-2 px-5'
      >
        Save
      </button>
      <button
        onClick={handleClose}
        className='float-right rounded text-sm cursor-pointer  hover:bg-slate-300 bg-slate-200 py-2 px-5 mr-2 mt-5'
      >
        Cancel
      </button>
    </>
  );
}

export default TransactionForm;
