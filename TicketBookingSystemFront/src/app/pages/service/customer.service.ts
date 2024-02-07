import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../entity/customer";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  //All logics are in service.ts and component ts--------------------
  url: string ='http://localhost:8080/customer'  //Connect data to the database--------------------------
  customerForm: any;
  customerService: any;
  constructor(private http : HttpClient){ }

  //get all customer details-------------------------
  getAllCustomer(): // @ts-ignore
  Observable<Customer[]>{ // @ts-ignore
    return this.http.get<Customer[]>(this.url)  //url---------------
  }

  //Save customer data--------------------------------------------------------------------------
  saveCustomer(customer: Customer): Observable<any>{
    //@ts-ignore--remove errors
      return this.http.post<any>(this.url, customer, {responseType:'text'})
    }

  //Deleting customer data-------------------------------------------------------------------------------
    deleteCustomer(customerID : number): Observable<string>{
      //@ts-ignore
       return this.http.delete<string>(this.url.concat('/').concat(String(customerID)), {responseType:"text"});
    }

    //Post/add new customer data--------------------------------------------------------------------
    addCustomer(customer: Customer): Observable<string>{
      //@ts-ignore
      return this.http.post<string>(this.url, customer, {responseType:'text'});
    }

  //Get details by ID---------------------------------------------------------------------------------
    getCustomerById(customerID:string): Observable<Customer>{
      return this.http.get<Customer>(this.url.concat('/').concat(customerID));
    }

  //Update details-----------------------------------------------------------------------------
  updateCustomer(customerID: number, customer: Customer): Observable<any>{
      //@ts-ignore
      return this.http.put<any>(this.url.concat('/').concat((customerID)), customer, {responseType:'text'});
    }

  //Searching customer using the first name--------------------------------
  searchCustomer(firstName: string):Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url.concat('/search/').concat(firstName))
   }
}
