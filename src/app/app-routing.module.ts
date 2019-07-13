import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FAQComponent } from './components/faq/faq.component';
import { HelpComponent } from './components/help/help.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'about', component: AboutComponent },
  { path: 'help', component: HelpComponent },
  { path: 'register', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'caretaker', loadChildren: './modules/caretaker/caretaker.module#CaretakerModule' },
  { path: 'tenant', loadChildren: './modules/tenant/tenant.module#TenantModule' },
  { path: 'property', loadChildren: './modules/property/property.module#PropertyModule' },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

export const ROUTED_COMPONENTS = [
  HomeComponent,
  AboutComponent,
  FAQComponent,
  HelpComponent,
  LoginComponent,
  SignupComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
