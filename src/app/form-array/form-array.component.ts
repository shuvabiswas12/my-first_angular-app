import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css'],
})
export class FormArrayComponent {
  get topics() {
    return this.form.get('topics') as FormArray;
  }

  form = new FormGroup({
    topics: new FormArray([]),
  });

  addTopics(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
    return;
  }

  remove(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
