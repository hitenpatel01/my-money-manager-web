import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy/privacy.component';
import { Error404Component } from './site/error404/error404.component';
import { SearchComponent } from './search/search.component';
import { UserService } from './user/user.service';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'privacy', component: PrivacyComponent},
  { path: 'search', component: SearchComponent},
  { path: 'user', component: UserComponent},
  { path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
