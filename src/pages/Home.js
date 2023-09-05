import React, { useEffect } from 'react';
import { convertToK } from '../helpers';
import Card from '../components/Card/Card';
import CardContent from '../components/CardContent/CardContent';
import Table from '../components/Table/Table';
import trendImg from '../images/trend.png';
import { useDispatch, useSelector } from 'react-redux';
import {
  getConversionRate,
  getTransactions,
} from '../redux/reducer/transactionSlice';
import Loading from '../components/Loading/Loading';

function Home() {
  const dispatch = useDispatch();
  const { totalAmount, previousCycle, isLoading, error, transactionList, usd } =
    useSelector((state) => state.transaction);
  useEffect(() => {
    if (!usd) {
      dispatch(getTransactions());
      dispatch(getConversionRate());
    }
  }, []);

  return (
    <>
      <div className='m-10 mt-2 mb-1 h-[calc(100vh-1rem)] flex flex-col gap-4 '>
        <div className='flex items-stretch gap-20 justify-between '>
          <Card bg>
            <div className='h-fit'>
              {usd ? (
                <>
                  <p className='text-blue-500 font-extrabold text-4xl mb-2 mt-5'>
                    {convertToK((totalAmount + previousCycle) / usd)}
                    <span className='text-xl text-black'>&nbsp;USD</span>
                  </p>
                  <div className='flex'>
                    <p className='font-extrabold text-emerald-500 text-lg'>
                      1.25%
                    </p>
                    <img src={trendImg} className='h-6 pl-2' />
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </Card>
          <Card>
            {usd ? <CardContent totalAmount={totalAmount / usd} /> : <></>}
          </Card>
          <Card>
            {usd ? <CardContent previousCycle={previousCycle / usd} /> : <></>}
          </Card>
        </div>
        <Table data={transactionList} usd={usd} />
      </div>
      <Loading open={isLoading} />
    </>
  );
}

export default Home;
