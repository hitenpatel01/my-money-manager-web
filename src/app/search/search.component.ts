import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Symbol } from './search.model';
import { SearchService } from './search.service';
import { Location } from '@angular/common';
import * as _ from 'lodash';

@Component({
  selector: 'm3-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  symbol: string;
  private _symbols: Symbol[];
  filteredSymbols: BehaviorSubject<_.Dictionary<Symbol[]>>;
  @ViewChild('search', { static: false }) search: any;

  constructor(private _router: Router, private _route: ActivatedRoute, private _searchService: SearchService, private _location: Location) {
    this.filteredSymbols = new BehaviorSubject({});
  }

  async ngOnInit() {
    this._symbols = await this._searchService.getSymbols();
    this.symbol = this._route.snapshot.queryParams['symbol'];
    if (this.symbol) {
      this.onChange();
    }
  }
  resetSymbol() {
    this.symbol = '';
    this._updateUrl();
    this.filteredSymbols.next({});
  }
  onChange() {
    this._updateUrl();

    if (this.symbol.length < 3) {
      this.filteredSymbols.next({});
      return;
    }
    const capitalizedSearchTerm = this.symbol.toUpperCase();

    const result = this._symbols.filter(stock => stock.symbol.indexOf(capitalizedSearchTerm) >= 0
      || stock.name.toUpperCase().indexOf(capitalizedSearchTerm) >= 0);

    const groupedResult = _.groupBy(result, 'type');

    this.filteredSymbols.next(groupedResult);
  }
  private _updateUrl() {
    this._location.go(location.pathname, `symbol=${this.symbol}`);
  }
}
