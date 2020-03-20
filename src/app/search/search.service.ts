import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Symbol } from './search.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private _url = 'assets/data/symbols.json';
  private _symbols: Symbol[];
  constructor(private _http: HttpClient) { }
  async getSymbols() {
    if (!this._symbols) {
      this._symbols = await this._http.get<Symbol[]>(this._url).toPromise();
      this._symbols.map(item => {
        switch (item.type) {
          case 'ad':
            item.type = 'American Depositary Receipt';
            break;
          case 're':
            item.type = 'REIT';
            break;
          case 'ce':
          case 'cef':
            item.type = 'Closed end fund';
            break;
          case 'si':
            item.type = 'Secondary Issue';
            break;
          case 'lp':
            item.type = 'Limited Partnerships';
            break;
          case 'cs':
            item.type = 'Common Stock';
            break;
          case 'et':
            item.type = 'ETF';
            break;
          case 'wt':
            item.type = 'Warrant';
            break;
          case 'oef':
            item.type = 'Open Ended Fund';
            break;
          case 'ps':
            item.type = 'Preferred Stock';
            break;
          case 'ut':
            item.type = 'Unit';
            break;
          case 'struct':
            item.type = 'Structured Product';
            break;
        }
        return item;
      });
    }
    return this._symbols;
  }
}
