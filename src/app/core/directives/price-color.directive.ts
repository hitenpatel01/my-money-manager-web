import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[m3PriceColor]'
})
export class PriceColorDirective implements OnChanges {
  private _el: ElementRef;
  @Input() value: any;
  constructor(el: ElementRef) {
    this._el = el;
  }
  ngOnChanges() {
    if (this.value <= 0) {
      this._el.nativeElement.style.color = 'red';
    } else {
      this._el.nativeElement.style.color = 'green';
    }
  }

}
