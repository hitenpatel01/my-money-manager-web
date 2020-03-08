export interface Stock {
  symbol: string;
  // exchange: string;
  name: string;
  // date: Date;
  type: string;
  // region: string;
  // currency: string;
  // isEnabled: boolean;
}

export interface StockGroup {
  type: string;
  stocks: Stock[];
}