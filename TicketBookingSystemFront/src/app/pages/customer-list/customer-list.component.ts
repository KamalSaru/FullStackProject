import {Component, OnDestroy, OnInit} from '@angular/core';
import {Customer} from "../entity/customer";
import {CustomerService} from "../service/customer.service";


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})

//logic in the service and component ts--------------------
export class CustomerListComponent implements OnInit, OnDestroy {
    customerList: Customer[] = [];  // customer list-------------------
    searchValue: string='';  // searchValue: string;

    constructor(private customerService: CustomerService) {
        console.log('Inside constructor')
    }

    //--------------------------------------------------------------
    ngOnInit(): void {
        console.log('component initialized');
        this.getAllCustomer(); //refresh after delete or reuse------
    }

    ngOnDestroy(): void {
    }
    //-----------------------------------------------------------------


    //Get customers details on table from backend-----------------------------
    getAllCustomer(): void {
      this.customerService.getAllCustomer().subscribe((customer: any) => {
            this.customerList = customer;
            console.log(this.customerList);
        })
    }

    //Save customer details using--------------------------------------------
    saveCustomer(customer: Customer): any{
        this.customerService.saveCustomer(customer).subscribe((result: string) =>{
            alert(result);
            this.getAllCustomer()
        })
    }

    //Deleting customer usind ID--------------------------------------------------
    deleteCustomer(customerID : number): void{
      this.customerService.deleteCustomer(customerID).subscribe((result: string)=>{
        // console.log(result);
        alert(result);//pup up alert
        this.getAllCustomer()   //refress after delete
      })
    }

    //Searching customer details using first name------------------------------------
    searchByFirstName(): void{
    this.customerService.searchCustomer(this.searchValue).subscribe((customer =>{
      this.customerList = customer;
    }))
  }
}
