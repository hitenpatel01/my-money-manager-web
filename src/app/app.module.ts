import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { AngularMaterialWrapperModule } from './angular-material-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { CoreModule } from './core/core.module';
import { SettingsModule } from './settings/settings.module';
import { SettingsService } from './settings/settings.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchInputComponent,
    SearchResultComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AngularMaterialWrapperModule,
    AppRoutingModule,
    CoreModule,
    SettingsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}