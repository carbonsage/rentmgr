import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CaretakerRoutingModule, COMPONENTS } from "./caretaker.routing";

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, CaretakerRoutingModule]
})
export class CaretakerModule {}
