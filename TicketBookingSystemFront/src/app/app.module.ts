import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NewCustomerComponent} from "./pages/new-customer/new-customer.component";
import { AdminRegisterComponent } from './pages/admin-login-register/admin-register.component';
import { TicketComponent } from './pages/ticket/ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    AdminLoginComponent,
    NewCustomerComponent,
    AdminRegisterComponent,
    TicketComponent,
  ],

  //This module need to be imports----------------
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

