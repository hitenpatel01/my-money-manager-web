import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { Stock } from './search.model';
import { SearchService } from './search.service';

@Component({
  selector: 'm3-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  filteredStocks: BehaviorSubject<Stock[]>;

  constructor(private _router: Router, private _searchService: SearchService) {
    this.filteredStocks = new BehaviorSubject([]);
  }

  ngOnInit() {
    // this._httpClient.get<Stock[]>(this._url).subscribe(data => {
    //   this._stock = data;
    //   this.filteredStocks.next(this._stock);
    // });
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
      this._searchService.stocks.filter(stock => stock.symbol.indexOf(capitalizedSearchTerm) >= 0
        || stock.name.toUpperCase().indexOf(capitalizedSearchTerm) >= 0));
  }
}
