import { Component, OnInit } from '@angular/core';
import { StockService } from './stock.service';
import { Quote } from './stock.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'm3-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  symbol: string;
  quote: Quote;
  constructor(private _activatedRoute: ActivatedRoute, private _stockService: StockService) { }

  async ngOnInit() {
    this.symbol = this._activatedRoute.params['symbol'];
    this.quote = await this._stockService.getQuote(this.symbol);
  }

}
