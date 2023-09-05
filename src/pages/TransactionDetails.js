import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TransactionDetails from '../components/TransactionDetails/TransactionDetails';

import data from '../data/data.json';

const getData = (id) => {
  return data.find((col) => {
    return col.invoice_no === id;
  });
};
function TransactionDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  let details = getData(id);
  useEffect(() => {
    if (id === undefined || id.length > 7) navigate('/not-found');
    // else dispatch(getMovieDetails(parseInt(movieId)));
    // return () => {
    //   dispatch(clearMovieDetails());
    // };
  }, [id]);
  return <TransactionDetails details={details} />;
}

export default TransactionDetailsPage;
