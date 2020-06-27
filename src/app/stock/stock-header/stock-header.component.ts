import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../stock.model';

@Component({
  selector: 'm3-stock-header',
  templateUrl: './stock-header.component.html',
  styleUrls: ['./stock-header.component.scss']
})
export class StockHeaderComponent implements OnInit {
  @Input() data: Quote;
  constructor() { }

  ngOnInit() {
  }

}
