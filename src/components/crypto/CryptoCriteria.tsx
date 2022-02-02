import React, { Dispatch, FC, SetStateAction, useRef } from 'react';

interface CryptoCriteriaProps {
  qty: number;
  setQty: Dispatch<SetStateAction<number>>;
  setSortColumn: Dispatch<SetStateAction<string>>;
  setSortAscending: Dispatch<SetStateAction<boolean>>;
}

const CryptoCriteria: FC<CryptoCriteriaProps> = ({
  qty,
  setQty,
  setSortColumn,
  setSortAscending,
}) => {
  const qtyRef = useRef<HTMLSelectElement>(null);
  const columnRef = useRef<HTMLSelectElement>(null);
  const ascRef = useRef<HTMLSelectElement>(null);

  const quantities: number[] = [5, 10, 15, 20, 25, 50, 100];

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const isAscending = e.target.value === 'Ascending' ? true : false;
    setSortAscending(isAscending);
  };

  return (
    <div className='crypto__criteria-container'>
      <form className='crypto__criteria-form'>
        <label>
          <p>Quantity</p>
          <select
            id='qty'
            ref={qtyRef}
            onChange={(e) => setQty(parseInt(e.target.value))}
            value={qty}
          >
            {quantities.map((q) => (
              <option key={q} id={`qty_${q}`} value={q}>
                {q}
              </option>
            ))}
          </select>
        </label>
        <label>
          <p>Sort by</p>
          <select
            id='sortby'
            ref={columnRef}
            onChange={(e) => setSortColumn(e.target.value)}
          >
            {[
              'Name',
              'FullName',
              'Price',
              '24hr Change',
              '24hr Low',
              '24hr High',
            ].map((item) => (
              <option key={item} id={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          <p>Order</p>
          <select
            id='order'
            ref={ascRef}
            onChange={(e) => handleOrderChange(e)}
          >
            {['Ascending', 'Descending'].map((item) => (
              <option key={item} id={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};

export default CryptoCriteria;
