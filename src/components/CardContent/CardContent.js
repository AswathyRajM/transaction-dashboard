import React from 'react';
import { convertToK } from '../../helpers';

function CardContent(props) {
  return (
    <div>
      <p className='h-10 font-medium text-xm mt-5'>
        {props.totalAmount ? 'Total Amount' : ''}
      </p>
      <p className='text-xs pt-2 text-slate-400'>
        {props.totalAmount ? 'Total Amount' : 'Previous Cycle'}
      </p>
      <p className='pt-2 font-extrabold text-3xl'>
        {props.totalAmount
          ? convertToK(props.totalAmount)
          : convertToK(props.previousCycle)}
        <span className='text-lg'>&nbsp;USD</span>
      </p>
    </div>
  );
}

export default CardContent;
