import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PropetyEditComponent } from './propety-edit/propety-edit.component';
import { PropetyListComponent } from './propety-list/propety-list.component';
import { PropetyDetailComponent } from './propety-detail/propety-detail.component';

const routes: Routes = [
  { path: 'list/:caretakerId', component: PropetyListComponent },
  { path: 'detail/:propertyId', component: PropetyDetailComponent },
  { path: '', redirectTo: "" },
];

export const COMPONENTS = [
  PropetyDetailComponent,
  PropetyEditComponent,
  PropetyListComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: []
})
export class PropertyRoutingModule {}
