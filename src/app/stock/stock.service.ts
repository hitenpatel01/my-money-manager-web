import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from './stock.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  constructor(private _http: HttpClient) { }
  getQuote(symbol: string) {
    return this._http.get<Quote>('assets/data/quote.json').toPromise();
  }
  getCompany(symbol: string) {
    return this._http.get('assets/data/company.json').toPromise();
  }
  getLogo(symbol: string) {
    return this._http.get('assets/data/logo.json').toPromise();
  }
  getNews(symbol: string) {
    return this._http.get('assets/data/news.json').toPromise();
  }
  getDividends(symbol: string) {
    return this._http.get('assets/data/dividends.json').toPromise();
  }
  getEarnings(symbol: string) {
    return this._http.get('assets/data/earnings.json').toPromise();
  }
  getChart(symbol: string) {
    return this._http.get('assets/data/chart.json').toPromise();
  }
}
