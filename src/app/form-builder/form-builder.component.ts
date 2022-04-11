import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent {
  form;

  constructor(fb: FormBuilder) {
    // this is the short form of declaring a reative form in angular. so we have to use form builder
    // for decaring short form.
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: ['', Validators.required],
        phone: ['', Validators.required],
      }),
      topics: fb.array([]),
    });
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  submit() {
    console.log(this.form);
  }
}
