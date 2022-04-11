import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textbox',
  template: `
    <div class="container">
      <label for="text">Enter anything what you want...</label> <br />
      <input type="text" [(ngModel)]="inputedText" />
      <br />
      <p id="outputField" class="display-5">
        {{ inputedText | titleCase }}
      </p>
    </div>
  `,
  styleUrls: ['./textbox.component.css'],
})
export class TextboxComponent implements OnInit {
  inputedText: string = '';

  constructor() {}

  ngOnInit(): void {}
}
