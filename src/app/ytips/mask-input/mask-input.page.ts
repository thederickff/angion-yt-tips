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
        validators: [Validators.required, Validators.pattern('^\\d{3}-\\d{2}-\\d{4}$')]
      })
    });
  }

  changeSocialSecurityNumber(event: any) {
    let value = event.target.value.replace(/\D/g, '');

    if (value.length > 9) {
      value = value.substring(value.length - 9);
    }

    const text = [];

    value.split('').forEach((char, index) => {
      switch (index) {
        case 3:
        case 5:
          text.push('-');
      }

      text.push(char);
    })

    this.form.controls.socialSecurityNumber.patchValue(text.join(''));
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
  }
}