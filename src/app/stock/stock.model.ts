export interface Quote {
    symbol: string;
    companyName: string;
    primaryExchange: string;
    previousClose: number;
    previousVolume: number;
    latestPrice: number;
    latestVolume: number;
    change: number;
    changePercent: number;
    open: number;
    close: number;
    high: number;
    low: number;
    avgTotalVolume: number;
    marketCap: number;
    peRatio: number;
    week52High: number;
    week52Low: number;
    ytdChange: number;
}
