import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from './base-page/base-page.component';
import { SignPipe } from './pipes/sign.pipe';
import { PriceColorDirective } from './directives/price-color.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BasePageComponent,
    SignPipe,
    PriceColorDirective
  ],
  exports: [
    BasePageComponent,
    SignPipe,
    PriceColorDirective
  ]
})
export class CoreModule { }
