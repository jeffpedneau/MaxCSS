import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlansComponent } from './plans/plans.component';
import { StickAroundComponent } from './stick-around/stick-around.component';
import { OverviewComponent } from './overview/overview.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { CustomersComponent } from './customers/customers.component';
import { StartHostingComponent } from './start-hosting/start-hosting.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PlansComponent,
    StickAroundComponent,
    OverviewComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PackagesComponent,
    CustomersComponent,
    StartHostingComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
