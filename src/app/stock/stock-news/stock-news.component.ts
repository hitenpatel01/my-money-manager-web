import { Component, OnInit, Input } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'm3-stock-news',
  templateUrl: './stock-news.component.html',
  styleUrls: ['./stock-news.component.scss']
})
export class StockNewsComponent implements OnInit {
  news: any;
  @Input() symbol: string;
  constructor(private _stockService: StockService) { }
  async ngOnInit() {
    this.news = await this._stockService.getNews(this.symbol);
  }

}
