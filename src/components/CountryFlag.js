import React from 'react';
import us from '../images/flags/us.svg';
import ind from '../images/flags/ind.svg';
import au from '../images/flags/au.svg';
import ca from '../images/flags/ca.svg';

function CountryFlag(column, row) {
  const country = row[column].country;
  if (!country) return row[column].name;
  const flag =
    country === 'us'
      ? us
      : country === 'ind'
      ? ind
      : country === 'ca'
      ? ca
      : au;

  return (
    <div className='flex flex-row gap-x-1'>
      <img width={20} height={12} src={flag} alt={country} lazy />
      <p>{row[column].name}</p>
    </div>
  );
}

export default CountryFlag;
