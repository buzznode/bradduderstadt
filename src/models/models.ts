export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

export interface CryptoData {
  CoinInfo: {
    Algorithm: string;
    AssetLaunchDate: string;
    BlockNumber: number;
    BlockReward: number;
    BlockTime: number;
    DocumentType: string;
    FullName: string;
    Id: string;
    ImageUrl: string;
    Internal: string;
    MaxSupply: number;
    Name: string;
    NetHashesPerSecond: number;
    ProofType: string;
    Rating: {
      Weiss: {
        MarketPerformanceRating: string;
        Rating: string;
        TechnologyAdoptionRating: string;
      };
    };
    Type: number;
    Url: string;
  };
  DISPLAY: {
    USD: {
      CHANGE24HOUR: string;
      CHANGEDAY: string;
      CHANGEHOUR: string;
      CHANGEPCT24HOUR: string;
      CHANGEPCTDAY: string;
      CHANGEPCTHOUR: string;
      CIRCULATINGSUPPLY: string;
      CIRCULATINGSUPPLYMKTCAP: string;
      CONVERSIONSYMBOL: string;
      CONVERSIONTYPE: string;
      FROMSYMBOL: string;
      HIGH24HOUR: string;
      HIGHDAY: string;
      HIGHHOUR: string;
      IMAGEURL: string;
      LASTMARKET: string;
      LASTTRADEID: string;
      LASTUPDATE: string;
      LASTVOLUME: string;
      LASTVOLUMETO: string;
      LOW24HOUR: string;
      LOWDAY: string;
      LOWHOUR: string;
      MARKET: string;
      MKTCAP: string;
      MKTCAPPENALTY: string;
      OPEN24HOUR: string;
      OPENDAY: string;
      OPENHOUR: string;
      PRICE: string;
      SUPPLY: string;
      TOPTIERVOLUME24HOUR: string;
      TOPTIERVOLUME24HOURTO: string;
      TOSYMBOL: string;
      TOTALTOPTIERVOLUME24H: string;
      TOTALTOPTIERVOLUME24HTO: string;
      TOTALVOLUME24H: string;
      TOTALVOLUME24HTO: string;
      VOLUME24HOUR: string;
      VOLUME24HOURTO: string;
      VOLUMEDAY: string;
      VOLUMEDAYTO: string;
      VOLUMEHOUR: string;
      VOLUMEHOURTO: string;
    };
  };
  RAW: {
    USD: {
      CHANGE24HOUR: number;
      CHANGEDAY: number;
      CHANGEHOUR: number;
      CHANGEPCT24HOUR: number;
      CHANGEPCTDAY: number;
      CHANGEPCTHOUR: number;
      CIRCULATINGSUPPLY: number;
      CIRCULATINGSUPPLYMKTCAP: number;
      CONVERSIONSYMBOL: string;
      CONVERSIONTYPE: string;
      FLAGS: string;
      FROMSYMBOL: string;
      HIGH24HOUR: number;
      HIGHDAY: number;
      HIGHHOUR: number;
      IMAGEURL: string;
      LASTMARKET: string;
      LASTTRADEID: string;
      LASTUPDATE: number;
      LASTVOLUME: number;
      LASTVOLUMETO: number;
      LOW24HOUR: number;
      LOWDAY: number;
      LOWHOUR: number;
      MARKET: string;
      MEDIAN: number;
      MKTCAP: number;
      MKTCAPPENALTY: number;
      OPEN24HOUR: number;
      OPENDAY: number;
      OPENHOUR: number;
      PRICE: number;
      SUPPLY: number;
      TOPTIERVOLUME24HOUR: number;
      TOPTIERVOLUME24HOURTO: number;
      TOSYMBOL: string;
      TOTALTOPTIERVOLUME24H: number;
      TOTALTOPTIERVOLUME24HTO: number;
      TOTALVOLUME24H: number;
      TOTALVOLUME24HTO: number;
      TYPE: string;
      VOLUME24HOUR: number;
      VOLUME24HOURTO: number;
      VOLUMEDAY: number;
      VOLUMEDAYTO: number;
      VOLUMEHOUR: number;
      VOLUMEHOURTO: number;
    };
  };
}

export interface PreparedData {
  Id: string;
  Name: string;
  FullName: string;
  ImageUrl: string;
  Url: string;
  Price: number;
  PriceF: string;
  Change: number;
  ChangeF: string;
  ChangePct: number;
  ChangePctF: string;
  Low: number;
  LowF: string;
  High: number;
  HighF: string;
}

export interface OrderBy {
  column: string;
  isAscending: boolean;
}
