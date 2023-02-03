import { NgModule } from "@angular/core";
import { DateFormatPipe } from "./pipes/date-format.pipe";

@NgModule({
  declarations: [
    DateFormatPipe
  ],
  imports: [],
  exports: [
    DateFormatPipe
  ]
})
export class SharedModule { }