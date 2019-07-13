export interface Caretaker {
  id: string | number;
  email: string;
  password: string;
  properties: Array<any>;
  tenants: Array<any>;
  agency: string | number;
  firstName: string;
  lastName: string;
}
