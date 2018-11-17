import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'm3-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  onSearch(searchTerm: string) {
    this._router.navigateByUrl(`/search?term=${searchTerm}`);
  }

}
