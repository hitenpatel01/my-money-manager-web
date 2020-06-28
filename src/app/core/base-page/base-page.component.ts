import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'm3-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss']
})
export class BasePageComponent implements OnInit, OnDestroy {
  private _isHandsetLayout = false;

  @Input() title: string;
  @Output() handsetLayout = new EventEmitter();

  constructor(private _breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this._breakpointObserver.observe(Breakpoints.Handset).subscribe(result => {
      console.log(result);
      this.handsetLayout.emit(result.matches);
    });
  }

  ngOnDestroy() {
  }

}
