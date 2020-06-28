import { Component, OnInit, Input } from '@angular/core';
import { StockService } from '../stock.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'm3-stock-company',
  templateUrl: './stock-company.component.html',
  styleUrls: ['./stock-company.component.scss']
})
export class StockCompanyComponent implements OnInit {
  company: any;
  logo: any;
  dividends: any;
  earnings: any;
  dividendDisplayedColumns: string[] = ['exDate', 'paymentDate', 'recordDate', 'declaredDate', 'amount', 'flag', 'currency', 'description', 'frequency', 'date'];
  epsDisplayedColumns: string[] = ['actualEPS', 'consensusEPS', 'announceTime', 'numberOfEstimates', 'EPSSurpriseDollar', 'EPSReportDate', 'fiscalPeriod', 'yearAgo', 'yearAgoChangePercent', 'currency'];
  @Input() symbol: string;
  isHandsetLayout = false;
  constructor(private _stockService: StockService, private _breakpointObserver: BreakpointObserver) {
    _breakpointObserver.observe(Breakpoints.Handset).subscribe(result => {
      this.isHandsetLayout = result.matches;
    });
  }

  async ngOnInit() {
    this.company = await this._stockService.getCompany(this.symbol);
    this.logo = await this._stockService.getLogo(this.symbol);
    this.dividends = await this._stockService.getDividends(this.symbol);
    this.earnings = await this._stockService.getEarnings(this.symbol);
  }

}
