import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Error404Component } from './site/error404/error404.component';
import { SearchComponent } from './search/search.component';
import { UserService } from './user/user.service';
import { UserComponent } from './user/user.component';
import { TermsComponent } from './terms/terms.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent},
  { path: 'home', component: HomeComponent},
  { path: 'search', component: SearchComponent},
  { path: 'stock/:symbol', component: StockComponent},
  { path: 'terms', component: TermsComponent},
  { path: 'user', component: UserComponent},
  { path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
