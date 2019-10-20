import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { AngularMaterialWrapperModule } from './angular-material-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './site/header/header.component';
import { NavigationComponent } from './site/navigation/navigation.component';
import { FooterComponent } from './site/footer/footer.component';

import { CoreModule } from './core/core.module';
import { AboutaboutComponent } from './aboutabout/aboutabout.component';
import { AboutComponent } from './about/about/about.component';
import { PrivacyComponent } from './privacy/privacy/privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    AboutaboutComponent,
    AboutComponent,
    PrivacyComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AngularMaterialWrapperModule,
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
