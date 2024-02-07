import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../service/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../entity/customer";

// @ts-ignore
@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})


export class NewCustomerComponent implements OnInit{
  customerForm!:FormGroup;
  customerData:any;
  customerID? : string;

  // @ts-ignore
  constructor(private formBuilder:FormBuilder,
  private  customerService: CustomerService,
  private router: Router,
  private route: ActivatedRoute){ //Dependency Injection
}

//Implements the fields-------------------------------------------------------------------------------------------------------
  ngOnInit(): void {
    this.customerForm=this.formBuilder.group({
      // We can put default value if we need(inside)...........................
      //Put required validators
      firstName :['', Validators.required],
      lastName: [''],
      address: [''],
      dob : [''],
      gender : [''],
      phone: [''],
      email: ['',[Validators.required, Validators.email]],
      active: [''],
      status: [''],
      travelers:[''],
      statusClass:[''],
      flyingFrom:[''],
      flyingTo:[''],
      departureDate:[''],
      departureTime:[''],
      airline:[''],
      flightNumber:[''],
      ticketPrice:[''],
      couponDiscount:[''],
      tax:[''],
      finalCost:[''],
      purchaseDate:[''],
    });

    //Upadate the necessary field of the customer---(patchValue)-is history data------------------------------------------
   //@ts-ignore
    this.customerID=this.route.snapshot.paramMap.get('customerID');
    if(this.customerID !==null){  //if id is not null than use
      //update operation
      //@ts-ignore
      this.customerService.getCustomerById(this.customerID).subscribe((customerData: Customer) =>{
        this.customerForm.patchValue(customerData);   //(patchValue)-is history data-------------------------
      });
    }
  }

//Save new customers----------------------------------------------------------------------------------------------------------
  saveCustomer(): any {
  console.log(this.customerForm.value);
  this.customerData = this.customerForm.value;
  this.customerData.active = this.customerData.active ? 'Yes' : 'No';
  if (this.customerID == null) {
      this.customerService.saveCustomer(this.customerData.value).subscribe((message: string) => {
        console.log(message);
        alert(message)
        //after add new customer back to homepage-------------
        this.router.navigate(['homepage']);
      });
    } else {
      //Updating existing customer-----------save back to homepage----------------
      this.customerService.updateCustomer(Number(this.customerID), this.customerData).subscribe((message: any) => {
        alert(message);
        this.router.navigate(['homepage']);
       })
     }
   }
 }
