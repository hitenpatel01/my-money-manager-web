import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from './base-page/base-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BasePageComponent
  ],
  exports: [
    BasePageComponent
  ]
})
export class CoreModule { }
