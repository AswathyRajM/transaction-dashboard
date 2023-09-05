import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TransactionDetails from '../components/TransactionDetails/TransactionDetails';
import { useDispatch } from 'react-redux';
import {
  clearDetails,
  setCurrentTransaction,
} from '../redux/reducer/transactionSlice';

function TransactionDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  if (id === undefined || id.length > 7) navigate('/not-found');
  else dispatch(setCurrentTransaction(id));

  useEffect(() => {
    return () => {
      dispatch(clearDetails());
    };
  }, [id]);
  return <TransactionDetails />;
}

export default TransactionDetailsPage;
