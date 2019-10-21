import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from './search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private _url = 'assets/data/symbols.json';
  stocks: Stock[];
  constructor(private _http: HttpClient) {
    this.getSymbols();
  }
  getSymbols() {
    this._http.get<Stock[]>(this._url).subscribe(stocks => {
      this.stocks = stocks;
    });
  }
}
