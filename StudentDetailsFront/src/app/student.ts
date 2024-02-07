export class Student {
  static ID(ID: any) {
    throw new Error('Method not implemented.');
  }
  //@ts-ignore
  id:number;
  firstName?: string;
  lastName?: string;
  address?: string;
  gender? : string;
  dob?: string;
  email?: string;
  phone?: string;
  status?: string
  active?: string;
}
