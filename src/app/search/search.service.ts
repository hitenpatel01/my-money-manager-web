import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from './search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private _url: string;
  stocks: Stock[];
  constructor(private _http: HttpClient) { }
  getSymbols() {
    this._http.get<Stock[]>(this._url).subscribe(stocks => {
      this.stocks = stocks
        .filter(x => true === x.isEnabled);
    });
  }
}
