import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CaretakerDetailComponent } from "./caretaker-detail/caretaker-detail.component";
import { CaretakerEditComponent } from './caretaker-edit/caretaker-edit.component';
import { CaretakerDashboardComponent } from './caretaker-dashboard/caretaker-dashboard.component';

const routes: Routes = [
  { path: 'dasboard/:caretakerId', component: CaretakerDashboardComponent },
  { path: 'detail/:caretakerId', component: CaretakerDetailComponent },
  { path: '', redirectTo: "" },
];

export const COMPONENTS = [
  CaretakerDetailComponent,
  CaretakerEditComponent,
  CaretakerDashboardComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: []
})
export class CaretakerRoutingModule {}
