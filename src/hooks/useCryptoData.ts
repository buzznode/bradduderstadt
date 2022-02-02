import { useEffect, useState } from 'react';
import { CryptoData, PreparedData } from '../models/models';
import { toCurrency, toPercent } from '../utils/formatting';

const useCryptoData = () => {
  const [cryptoData, setCryptoData] = useState<Array<PreparedData>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD'
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const preparedData: Array<PreparedData> = [];

        data.Data.forEach((d: CryptoData) => {
          const {
            Id: id,
            Name: name,
            FullName: fullName,
            ImageUrl: imageUrl,
            Url: url,
          } = d.CoinInfo;

          let price;
          let change;
          let changepct;
          let low;
          let high;

          if (d.RAW?.USD) {
            price = d.RAW.USD.PRICE;
            change = d.RAW.USD.CHANGE24HOUR;
            changepct = d.RAW.USD.CHANGEPCT24HOUR;
            low = d.RAW.USD.LOW24HOUR;
            high = d.RAW.USD.HIGH24HOUR;
          } else {
            price = 0.0;
            change = 0.0;
            changepct = 0;
            low = 0.0;
            high = 0.0;
          }

          preparedData.push({
            Id: id,
            Name: name,
            FullName: fullName,
            ImageUrl: `https://www.cryptocompare.com${imageUrl}`,
            Url: `https://www.cryptocompare.com${url}`,
            Price: price,
            PriceF: toCurrency(price),
            Change: change,
            ChangeF: toCurrency(change),
            ChangePct: changepct,
            ChangePctF: toPercent(changepct),
            Low: low,
            LowF: toCurrency(low),
            High: high,
            HighF: toCurrency(high),
          });
        });

        setCryptoData(preparedData);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { cryptoData, isLoading };
};

export default useCryptoData;
