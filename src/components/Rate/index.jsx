import React, { useEffect, useState } from 'react';
import './style.css';

const Rate = ({from}) => {

  const [czechValue, setValue] = useState('');
  
  useEffect(() =>{
    fetch(`https://api.frankfurter.app/latest?from=${from}&to=CZK`)
    .then((response) => response.json())
    .then((data) => setValue(data.rates.CZK) )},
    [from]
  )


  return (
    <div className="rate">
      <div className="rate__currency">1 {from}</div>
      <div>=</div>
      <div className="rate__value">{czechValue} CZK </div>
    </div>
  );
};

export default Rate;
