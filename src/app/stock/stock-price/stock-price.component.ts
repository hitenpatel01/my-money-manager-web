import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { StockService } from '../stock.service';
import { ChartEditorComponent, ChartBase } from 'angular-google-charts';

@Component({
  selector: 'm3-stock-price',
  templateUrl: './stock-price.component.html',
  styleUrls: ['./stock-price.component.scss']
})
export class StockPriceComponent implements OnInit {
  @Input() data: any;
  @Input() symbol: string;
  chartData: any;
  chartOptions = {
    legend: { position: 'none' },
    backgroundColor: 'none',
    is3D: true,
    chartArea: {
      top: 10,
      left: 50,
      right: 10,
      bottom: 40,
      chartArea: { height: 200 }
    },
    crosshair: { trigger: 'both' },
    pointSize: 5,
    series: {
      0: { pointShape: 'circle' },
    },
    fontName: 'Roboto',
    fontSize: 14,
    vAxis: {
      title: 'Price',
    },
    hAxis: {
      title: 'Date',
      format: 'MMM d'
    }
  };

  constructor(private _stockService: StockService) { }

  async ngOnInit() {
    const srcChartData = (await this._stockService.getChart(this.symbol)) as any[];
    this.chartData = srcChartData.map(item => [new Date(item.date), item.close]);
  }
}
