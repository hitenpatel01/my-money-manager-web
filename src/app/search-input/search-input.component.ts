import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatAutocomplete } from '@angular/material/autocomplete';

export interface Symbol {
  symbol: string;
  name: string;
  date?: DataCue;
  isEnabled?: boolean;
  type?: string;
}

@Component({
  selector: 'm3-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  private _url = 'https://pkza21c9q7.execute-api.us-east-1.amazonaws.com/dev/ref-data/symbol';
  private _symbols: Symbol[];
  filteredSymbols: BehaviorSubject<Symbol[]>;

  constructor(private _router: Router, private _http: HttpClient) {
    this.filteredSymbols = new BehaviorSubject([]);
  }

  ngOnInit() {
    this._http.get<Symbol[]>(this._url).subscribe(symbols => {
      this._symbols = symbols
        .filter(symbol => true === symbol.isEnabled)
        .map<Symbol>(symbol => {
          return { symbol: symbol.symbol, name: symbol.name }
        });
    });
    this.filteredSymbols.next(this._symbols);
  }
  onSearch(searchTerm: string) {
    this._router.navigateByUrl(`/search?term=${searchTerm}`);
  }
  onChange(searchTerm: string) {
    if (searchTerm.length === 0) {
      this.filteredSymbols.next(null);
    }
    if (searchTerm.length < 3) {
      return;
    }
    const capitalizedSearchTerm = searchTerm.toUpperCase();
    this.filteredSymbols.next(
      this._symbols.filter(symbol => symbol.symbol.indexOf(capitalizedSearchTerm) >= 0
        || symbol.name.toUpperCase().indexOf(capitalizedSearchTerm) >= 0));
  }
}
