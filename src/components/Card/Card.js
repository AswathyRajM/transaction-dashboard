import React from 'react';
import receiptImg from '../../images/receipt.png';
import coinImg from '../../images/coin.png';

function Card(props) {
  if (props.bg)
    return (
      <div className='bg-indigo-100 w-full rounded-lg min-h-min p-8 flex items-center justify-start gap-x-4'>
        <div className='bg-blue-100 p-4 w-16 h-16'>
          <img src={coinImg} />
        </div>
        <>{props.children}</>
      </div>
    );

  return (
    <div className='bg-slate-100 w-full rounded-lg min-h-min h-fit p-8 pt-4 flex gap-8'>
      <div className='bg-orange-50 p-4 w-16 h-16'>
        <img src={receiptImg} />
      </div>
      <>{props.children}</>
    </div>
  );
}

export default Card;
