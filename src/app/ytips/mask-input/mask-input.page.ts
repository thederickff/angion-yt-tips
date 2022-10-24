import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-mask-input',
  templateUrl: './mask-input.page.html',
  styleUrls: ['./mask-input.page.scss']
})
export class MaskInputPage {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      socialSecurityNumber: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      phoneNumber: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      })
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
  }
}