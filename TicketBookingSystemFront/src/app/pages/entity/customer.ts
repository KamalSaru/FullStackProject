import { Ticket } from "./ticket";

export class Customer {
  static ID(ID: any) {
    throw new Error('Method not implemented.');
  }

  //ts is entity class fields-------------------------------------------------------------------------------------------------
  customerID?:any;  //need to put string but doesn't take, so pu any-----
  firstName?: string;
  lastName?:string;
  address?:string;
  dob?:string;
  gender?: string;
  phone? : string;
  email? : string;
  active? : string;
  status? :string;
  ticketList?: Ticket[];
}
