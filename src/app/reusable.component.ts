import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-resuable',
  template: `
    <div class="container m-5">
      <p class="display-4 d-flex g-2">
        <strong class="text-capitalize">Title: </strong>
        &nbsp;
        <ng-content select=".title"></ng-content>
      </p>
      <hr />
      <h5 class="display-5 d-flex g-2">
        <strong class="text-capitalize">Description: </strong>
        &nbsp;
        <ng-content select=".description"></ng-content>
      </h5>
    </div>
  `,
})
export class ResuableComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
