import { useState } from 'react';
import TransactionForm from './TransactionForm';
import editingImg from '../../images/editing.png';
import closeImg from '../../images/close.png';
import CountryFlag from '../CountryFlag';
import { useNavigate } from 'react-router-dom';

function TransactionDetails({ details }) {
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  let usd = 10;
  return (
    <div className='m-10 mt-2 mb-1 h-[calc(100vh-5rem)] flex items-center justify-center  '>
      <div className='bg-slate-100 w-fit rounded-lg h-fit p-8 pb-4 pt-4 shadow-sm'>
        <div className='w-full flex justify-between'>
          <h3 className='text-2xl font-medium '>Transaction Details</h3>
          <div>
            {edit ? (
              <></>
            ) : (
              <div className='flex justify-between items-center'>
                <img
                  className='rounded ml-5 cursor-pointer'
                  onClick={() => {
                    if (edit) {
                    }
                    setEdit(!edit);
                  }}
                  src={editingImg}
                  width={22}
                  title='Edit'
                />
                <img
                  className='rounded ml-5 cursor-pointer'
                  onClick={() => {
                    navigate('/');
                  }}
                  src={closeImg}
                  width={18}
                  title='Close'
                />
              </div>
            )}
          </div>
        </div>
        <br />

        {edit ? (
          <TransactionForm
            details={details}
            setEdit={(value) => setEdit(value)}
          />
        ) : (
          <div className='flex flex-col'>
            <div className='flex items-start flex-col justify-center m-5 mt-0 mb-3 text-blue-500 '>
              <label for='amount' className='font-medium text-black -ml-5'>
                Amount
              </label>
              <p name='amount' className='font-bold text-3xl mt-5 '>
                ₹&nbsp;{details.amount.toFixed(2)}
              </p>
              <p className='font-bold text-3xl mt-5'>
                $&nbsp;{(details.amount * usd).toFixed(2)}
              </p>
            </div>
            <br />
            <div className=''>
              <div className='flex justify-between items-center'>
                <div className='mb-2'>
                  <label for='transaction_date' className='font-medium'>
                    Date
                  </label>
                  <p className='text-sm text-slate-600' name='transaction_date'>
                    {details.transaction_date}
                  </p>
                </div>
                <div className='mb-2'>
                  <label for='transaction_date' className='font-medium'>
                    Status
                  </label>
                  <p name='transaction_date' className='text-sm text-slate-600'>
                    {details.status === 1
                      ? 'First'
                      : details.status === 2
                      ? 'Second'
                      : 'Third'}
                  </p>
                </div>
              </div>
              <div className='font-medium mt-4'>
                <label for='transaction_date'>Payer Name </label>
                <div className='mt-2 relative text-slate-500 text-sm w-64'>
                  {CountryFlag('payer', details)}
                </div>
              </div>
              <div className='font-medium mt-4 '>
                <label for='transaction_date'>Payee Name</label>
                <div className='mt-2 relative text-slate-500 text-sm'>
                  {CountryFlag('payee', details)}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TransactionDetails;
