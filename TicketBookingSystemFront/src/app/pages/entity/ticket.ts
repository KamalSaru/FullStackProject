export class Ticket {
  static ID(ID: any) {
    throw new Error('Method not implemented.');
  }

  //ts is entity class fields-------------------------------------------------------------------------------------------------
  ticketID:any;
  travelers?: string;
  statusClass?: string;
  flyingFrom?: string;
  flyingTo?: string;
  departureDate?: string;
  departureTime?: string;
  airline?: string;
  flightNumber?: string;
  ticketPrice?: string;
  couponDiscount?: string;
  tax?: string;
  finalCost?: string
  purchaseDate?: string;
}
