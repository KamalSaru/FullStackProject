import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerListComponent} from "./pages/customer-list/customer-list.component";
import {AdminLoginComponent} from "./pages/admin-login/admin-login.component";
import {NewCustomerComponent} from "./pages/new-customer/new-customer.component";
import {AdminRegisterComponent} from "./pages/admin-login-register/admin-register.component";
import {TicketComponent} from "./pages/ticket/ticket.component";



const routes: Routes = [
  //this component for open pages---------------------------------------------------------------------
  //app routing to link to open the pages-----------------
  {path: '', component:AdminLoginComponent}, //Admin login/localhost/4200-------------
  {path: 'adminRegister',component:AdminRegisterComponent}, //Admin login register------------------------
  {path: 'homepage', component:CustomerListComponent},  //Open homepage-------------
  {path: 'view', component:TicketComponent},  //Open/view ticket details-------------------
  {path: 'new', component:NewCustomerComponent},   //Go to new customers--------------
  {path:'update/:customerID', component:NewCustomerComponent} //edit and update customer------------------

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
