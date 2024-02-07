import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ticket} from "../entity/ticket";
import {Observable} from "rxjs";
import { Customer } from '../entity/customer';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  //All logics are in service.ts and component ts--------------------
  url: string ='http://localhost:8080/customer'  //Connect data to the database--------------------------
  customerForm: any;
  customerService: any;
  constructor(private http : HttpClient){ }

  getAllTicket(): Observable<Ticket[]>{
    return this.http.get<(Ticket[])>(this.url)
  }

  // saveTicket(ticket: Ticket):Observable<any>{
  //   //@ts-ignore
  //   return this.http.post<any>(this.url, ticket, {responseType:'text'})
  // }

  // updateTicket(ticketID: string): Observable<Ticket>{
  //   return this.http.get<Ticket>(this.url.concat('/').concat(ticketID));
  // }

  // getAllCustomer(): Observable<Customer[]>{
  //   return this.http.get<(Customer[])>(this.url)
  // }
}
