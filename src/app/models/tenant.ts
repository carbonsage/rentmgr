export enum PaymentStatus {
  PAID,
  DUE,
  OVERDUE,
}

export enum RentCycle {
  YEARLY,
  MONTHLY,
  WEEKLY,
}

export interface Tenant {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  id: string | number;
  agency: string | number;
  caretaker: string | number;
  property: string | number;
  apartmentNum: number;
  apartmentCnt: number;
  rent: number;
  paymentStat: PaymentStatus;
  rentCycle: RentCycle;
  age: number;
  gender: string;
  rentStartDate: string;
}
