import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ticket } from '../entity/ticket';
import { TicketService } from '../service/ticket.service';
import { Customer } from '../entity/customer';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit, OnDestroy {
  ticketList: Ticket[] = [];
  // ticketForm! :FormGroup;
  // ticketData : any;
  // ticketID? : string;
  
  constructor(
    private formBuilder : FormBuilder,
    private ticketService: TicketService,
    private router: Router,
    private route: ActivatedRoute){
    console.log('Inside constructor.')
  }
  
  //---------------------------------------------------------------------
  ngOnInit(): void {
  //   this.ticketForm=this.formBuilder.group({
  //   travelers:[''],
  //   statusClass:[''],
  //   flyingFrom:[''],
  //   flyingTo:[''],
  //   departureDate:[''],
  //   departureTime:[''],
  //   airline:[''],
  //   flightNumber:[''],
  //   ticketPrice:[''],
  //   couponDiscount:[''],
  //   tax:[''],
  //   finalCost:[''],
  //   purchaseDate:[''],
      console.log('component initialized.')
      this.getAllTicket();
  // });

  //@ts-ignore
  // this.ticketID=this.route.snapshot.paramMap.get('ticketID')
  // if(this.ticketID !==null){  //if id is not null than use
  //   //update operation
  //   //@ts-ignore
  //   this.ticketService.getTicketById(this.ticketID).subscribe((ticketData: Ticket) =>{
  //     this.ticketForm.patchValue(ticketData);   //(patchValue)-is history data-------------------------
  //   });
  // }
  }

  // saveTicket(): any {
  //   console.log(this.ticketForm.value);
  //   this.ticketData = this.ticketForm.value;
  //   this.ticketData.active = this.ticketData.active ? 'Yes' : 'No';
  //   if (this.ticketID == null) {
  //       this.ticketService.saveTicket(this.ticketData.value).subscribe((message: string) => {
  //         console.log(message);
  //         alert(message)
  //         //after add new customer back to homepage-------------
  //         this.router.navigate(['homepage']);
  //       });
  //     } else {
  //       //Updating existing customer-----------save back to homepage----------------
  //       //@ts-ignore
  //       this.ticketService.updateTicket(Number(this.ticketID), this.ticketData).subscribe((message: any) => {
  //         alert(message);
  //         this.router.navigate(['homepage']);
  //        })
  //      }
  //    }

  ngOnDestroy(): void {
  }


  //Get all the ticket details---------------------------------------------
  getAllTicket():void{
    //@ts-ignore
    this.ticketService.getAllTicket().subscribe((ticket: Customer[]) => {
      ticket.forEach((customer : Customer) => {
        customer.ticketList?.forEach((ticket: Ticket) =>{
          this.ticketList.push(ticket);
        })
      });
    })
  }
}
