import { useEffect, useState } from 'react';
import TransactionForm from './TransactionForm';
import editingImg from '../../images/editing.png';
import closeImg from '../../images/close.png';
import CountryFlag from '../CountryFlag';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../Loading/Loading';

function TransactionDetails() {
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  const { usd, currentTransation, isLoading } = useSelector(
    (state) => state.transaction
  );
  if (!currentTransation || currentTransation.amount === undefined)
    navigate('/not-found');

  const close = () => {
    navigate('/');
  };
  return (
    <>
      <Loading open={isLoading} />

      <div className='m-10 mt-2 mb-1 h-[calc(100vh-5rem)] flex items-center justify-center  '>
        <div className='bg-slate-100 w-fit rounded-lg h-fit p-10 shadow-sm'>
          <div className='w-full flex justify-between'>
            <h3 className='text-2xl font-medium'>Transaction Details</h3>
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
                      close();
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
              currentTransation={currentTransation}
              setEdit={(value) => setEdit(value)}
              close={close}
            />
          ) : currentTransation ? (
            <>
              <div className='flex flex-col'>
                <div className='flex items-start flex-col justify-center m-5 ml-0 mt-0 mb-3 text-blue-500 '>
                  <label for='amount' className='font-medium text-black '>
                    Amount
                  </label>
                  <p name='amount' className='font-bold text-3xl mt-5  '>
                    ₹&nbsp;{currentTransation.amount?.toFixed(2)}
                  </p>
                  <p className='font-bold text-3xl mt-5'>
                    $&nbsp;{(currentTransation.amount / usd)?.toFixed(2)}
                  </p>
                </div>
                <br />
                <div className=''>
                  <div className='flex justify-between items-center'>
                    <div className='mb-2'>
                      <label for='transaction_date' className='font-medium'>
                        Date
                      </label>
                      <p
                        className='text-sm text-slate-600'
                        name='transaction_date'
                      >
                        {currentTransation.transaction_date}
                      </p>
                    </div>
                    <div className='mb-2'>
                      <label for='transaction_date' className='font-medium'>
                        Status
                      </label>
                      <p
                        name='transaction_date'
                        className='text-sm text-slate-600'
                      >
                        {currentTransation.status === 1
                          ? 'First'
                          : currentTransation.status === 2
                          ? 'Second'
                          : 'Third'}
                      </p>
                    </div>
                  </div>
                  <div className='font-medium mt-4'>
                    <label for='transaction_date'>Payer Name </label>
                    <div className='mt-2 relative text-slate-500 text-sm w-64'>
                      {CountryFlag('payer', currentTransation)}
                    </div>
                  </div>
                  <div className='font-medium mt-4 '>
                    <label for='transaction_date'>Payee Name</label>
                    <div className='mt-2 relative text-slate-500 text-sm'>
                      {CountryFlag('payee', currentTransation)}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default TransactionDetails;
