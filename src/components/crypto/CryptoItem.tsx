import React, { FC } from 'react';
import { PreparedData } from '../../models/models';
import '../../styles/crypto.css';

const CryptoItem: FC<PreparedData> = (props) => {
  return (
    <div className='crypto__item'>
      <img src={props.ImageUrl} className='crypto__icon' alt={props.Name} />
      <div className='crypto__display-container'>
        <div className='crypto__name'>{props.Name}</div>
        <div className='crypto__fullname'>{props.FullName}</div>
      </div>
      <div className='crypto__price-container'>
        <div className='crypto__price'>{props.PriceF}</div>
        <div
          className={`${
            props.Change < 0 ? 'crypto__danger' : 'crypto__success'
          }`}
        >
          {props.ChangeF}
        </div>
      </div>
    </div>
  );
};

export default CryptoItem;
