import React from 'react';

function Status(value) {
  let cells = [];
  for (let i = 0; i < 3; i++) {
    if (value > i)
      cells.push(
        <>
          <div className='flex flex-col items-center  '>
            <span className='w-14 h-1 mr-3 bg-slate-500 rounded-xs' />
            <div className='mr-3 text-xs font-medium mt-1'>
              {i === 0 ? 'First' : i === 1 ? 'Second' : 'Third'}
            </div>
          </div>
        </>
      );
    else
      cells.push(
        <div className='flex flex-col items-start '>
          <span className='w-14 h-1 mr-3 bg-slate-200  rounded-xs' />
          <div className='mr-3 text-xs font-medium mt-1'>&nbsp;</div>
        </div>
      );
  }
  return cells;
}

export default Status;
