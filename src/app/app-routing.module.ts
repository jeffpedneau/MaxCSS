import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackagesComponent } from './packages/packages.component';
import { CustomersComponent } from './customers/customers.component';
import { StartHostingComponent } from './start-hosting/start-hosting.component';

const routes: Routes = [
  { path: '',  redirectTo: '/home', pathMatch: 'full' },

  { path: 'home',       component: HomeComponent },
  { path: 'packages',   component: PackagesComponent },
  { path: 'customers',  component: CustomersComponent },
  { path: 'starthost',  component: StartHostingComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
