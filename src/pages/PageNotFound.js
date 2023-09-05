import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className=' h-[calc(80vh-.5rem)] w-full flex justify-center items-center'>
      <div className=' bg-slate-200 p-20 rounded-lg shadow-sm text-center'>
        <p className='text-lg'>Page Not Found!</p>
        <Link className='underline text-sm mt-2' to='/'>
          Home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
