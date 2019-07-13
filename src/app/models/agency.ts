export interface Agency {
  id: string | number;
  email: string;
  website: string;
  password: string;
  caretakers: Array<any>;
  properties: Array<any>;
  tenants: Array<any>;
  address: string;
  state: string;
  city: string;
  country: string;
  name: string;
}
