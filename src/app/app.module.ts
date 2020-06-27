import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';

import { AngularMaterialWrapperModule } from './angular-material-wrapper';

import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './site/header/header.component';
import { NavigationComponent } from './site/navigation/navigation.component';
import { FooterComponent } from './site/footer/footer.component';

import { CoreModule } from './core/core.module';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { Error404Component } from './site/error404/error404.component';
import { TermsComponent } from './terms/terms.component';
import { StockComponent } from './stock/stock.component';
import { StockHeaderComponent } from './stock/stock-header/stock-header.component';
import { StockNewsComponent } from './stock/stock-news/stock-news.component';
import { StockCompanyComponent } from './stock/stock-company/stock-company.component';
import { StockPriceComponent } from './stock/stock-price/stock-price.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    AboutComponent,
    UserComponent,
    Error404Component,
    TermsComponent,
    StockComponent,
    StockHeaderComponent,
    StockNewsComponent,
    StockCompanyComponent,
    StockPriceComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    AngularMaterialWrapperModule,
    GoogleChartsModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
