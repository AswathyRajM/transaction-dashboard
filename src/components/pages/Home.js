import React from 'react';
import data from '../../data/data.json';
import { convertToK } from '../../helpers';
import Card from '../Card/Card';
import CardContent from '../CardContent/CardContent';
import trendImg from '../../images/trend.png';
import Table from '../Table/Table';

const state = { totalAmount: 200000, previousCycle: 20000 };
function Home() {
  return (
    <div className='g-green-500 m-10 mt-2 mb-1 h-[calc(100vh-.5rem)] flex flex-col gap-4 '>
      <div className='flex items-stretch gap-20 justify-between '>
        <Card bg>
          <div className='h-fit'>
            <p className='text-blue-500 font-extrabold text-4xl mb-2 mt-5'>
              {convertToK(state.totalAmount + state.previousCycle)}
              <span className='text-xl text-black'>&nbsp;USD</span>
            </p>
            <div className='flex'>
              <p className='font-extrabold text-emerald-500 text-lg'>1.25%</p>
              <img src={trendImg} className='h-6 pl-2' />
            </div>
          </div>
        </Card>
        <Card>
          <CardContent totalAmount={state.totalAmount} />
        </Card>
        <Card>
          <CardContent previousCycle={state.previousCycle} />
        </Card>
      </div>
      <Table data={data} />
    </div>
  );
}

export default Home;
