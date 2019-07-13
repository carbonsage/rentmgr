import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TenantDashboardComponent } from './tenant-dashboard/tenant-dashboard.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { TenantDetailComponent } from './tenant-detail/tenant-detail.component';
import { TenantEditComponent } from './tenant-edit/tenant-edit.component';

const routes: Routes = [
  { path: 'list/:propertyId', component: TenantListComponent },
  { path: 'detail/:tenantId', component: TenantDetailComponent },
  { path: 'dashboard/:tenantId', component: TenantDashboardComponent },
  { path: '', redirectTo: "" },
];

export const COMPONENTS = [
  TenantDetailComponent,
  TenantEditComponent,
  TenantDashboardComponent,
  TenantListComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: []
})
export class TenantRoutingModule {}
