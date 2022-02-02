import React, { FC, useEffect, useState } from 'react';
import useCryptoData from '../hooks/useCryptoData';
import CryptoCriteria from '../components/crypto/CryptoCriteria';
import CryptoItem from '../components/crypto/CryptoItem';
import { PreparedData } from '../models/models';
import { sortObjects } from '../utils/sorting';
import '../styles/crypto.css';

const CryptoPage: FC = () => {
  const [qty, setQty] = useState<number>(10);
  const [sortColumn, setSortColumn] = useState<string>('Name');
  const [sortAscending, setSortAscending] = useState<boolean>(true);
  const [sortedData, setSortedData] = useState<Array<PreparedData>>([]);
  const { cryptoData, isLoading } = useCryptoData();

  useEffect(() => {
    setSortedData(sortObjects(cryptoData, sortColumn, sortAscending));
  }, [cryptoData, sortColumn, sortAscending, qty]);

  return (
    <div className='crypto__container'>
      <div className='crypto__results-container'>
        {!isLoading ? (
          sortedData
            .slice(0, qty)
            .map((item) => <CryptoItem key={item.Id} {...item} />)
        ) : (
          <p className='crypto__loading-text'>Loading data...</p>
        )}
      </div>
      <CryptoCriteria
        qty={qty}
        setQty={setQty}
        setSortColumn={setSortColumn}
        setSortAscending={setSortAscending}
      />
    </div>
  );
};

export default CryptoPage;
