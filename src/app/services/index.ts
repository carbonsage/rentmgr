import { AccountService } from './account.service';
import { PropertyService } from './property.service';
import { ProviderService } from './provider.service';
import { TenantService } from './tenant.service';

export { AccountService } from './account.service';
export { PropertyService } from './property.service';
export { ProviderService } from './provider.service';
export { TenantService } from './tenant.service';

export const SERVICES = [
  AccountService,
  PropertyService,
  ProviderService,
  TenantService
];
