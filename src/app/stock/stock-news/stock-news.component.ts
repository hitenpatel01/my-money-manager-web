import { Component, OnInit, Input } from '@angular/core';
import { StockService } from '../stock.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'm3-stock-news',
  templateUrl: './stock-news.component.html',
  styleUrls: ['./stock-news.component.scss']
})
export class StockNewsComponent implements OnInit {
  news: any;
  @Input() symbol: string;
  isHandsetLayout = false;
  constructor(private _stockService: StockService, private _breakpointObserver: BreakpointObserver) { 
    _breakpointObserver.observe(Breakpoints.Handset).subscribe(result => {
      this.isHandsetLayout = result.matches;
    });
  }
  async ngOnInit() {
    this.news = await this._stockService.getNews(this.symbol);
  }

}
