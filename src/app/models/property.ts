export enum PropertyType {
  APARTMENT,
  OFFICE,
  HOTEL,
  SHOP,
  WHAREHOUSE
}

export interface Property {
  id: string | number;
  agency: string | number;
  caretaker: string | number;
  name: string;
  address: string;
  country: string;
  state: string;
  lga: string;
  description: string;
  lng: number;
  lat: number;
  type: PropertyType;
  width: number;
  length: number;
  units: number;
  tenants: Array<any>;
  value: number;
}
