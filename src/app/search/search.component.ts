import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Stock } from './search.model';

@Component({
  selector: 'm3-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  private _url = 'https://pkza21c9q7.execute-api.us-east-1.amazonaws.com/dev/ref-data/symbol';
  private _stock: Stock[];
  filteredStocks: BehaviorSubject<Stock[]>;

  constructor(private _router: Router) {
    this.filteredStocks = new BehaviorSubject([]);
  }

  ngOnInit() {
    this.filteredStocks.next(this._stock);
  }
  onSearch(searchTerm: string) {
    this._router.navigateByUrl(`/search?term=${searchTerm}`);
  }
  onChange(searchTerm: string) {
    if (searchTerm.length === 0) {
      this.filteredStocks.next(null);
    }
    if (searchTerm.length < 3) {
      return;
    }
    const capitalizedSearchTerm = searchTerm.toUpperCase();
    this.filteredStocks.next(
      this._stock.filter(stock => stock.symbol.indexOf(capitalizedSearchTerm) >= 0
        || stock.name.toUpperCase().indexOf(capitalizedSearchTerm) >= 0));
  }
}
