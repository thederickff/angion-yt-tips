import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { MaskInputPage } from "./mask-input.page";

const routes: Routes = [
  {
    path: '',
    component: MaskInputPage
  }
]

@NgModule({
  declarations: [MaskInputPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class MaskInputPageModule { }