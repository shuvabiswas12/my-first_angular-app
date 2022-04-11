import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="container">
      <div
        class="w-100"
        [class.bg-dark]="!isSelect"
        [class.bg-danger]="isSelect"
        (click)="changeBg()"
      >
        <p class="text-white text-center">&nbsp;</p>
      </div>
    </div>

    <!-- if else in angular -->
    <div class="container">
      <p class="lead">List of Courses:</p>
      <br />
      <ng-template [ngIf]="listOfCourses.length > 0" [ngIfElse]="elseBlock" ]>
        <ul *ngFor="let course of listOfCourses">
          <li>item</li>
        </ul>
      </ng-template>
      <ng-template #elseBlock>
        <h5>There are no courses available yet.</h5>

        <p *ngIf="isDevelopment; else elseProduction">
          This is development mode.
        </p>
        <ng-template #elseProduction>
          <p>this is production mode.</p>
        </ng-template>
      </ng-template>
    </div>

    <!-- switch case in angular -->

    <div class="container">
      <div class="nav nav-fill">
        <a
          class="btn "
          [class.active]="viewMode == 'map'"
          (click)="viewMode = 'map'"
          >Map View</a
        >
        <a
          class="btn "
          [class.active]="viewMode == 'list'"
          (click)="viewMode = 'list'"
          >ListView</a
        >
      </div>

      <br />

      <!-- example for switch case -->
      <div class="row" [ngSwitch]="viewMode">
        <p *ngSwitchCase="'map'" class="display-5">This is map view mode.</p>
        <p *ngSwitchCase="'list'" class="display-5">This is list view mode.</p>
        <p *ngSwitchDefault>otherwise</p>
      </div>
    </div>

    <br />

    <!-- example for custom directives -->
    <div class="container">
      <input [appInputFormat]="'uppercase'" type="text" class="form-control" />
    </div>
    <br />

    <!-- example for ngForOf loop and trackBy function -->
    <div class="container">
      <button class="btn btn-secondary" (click)="loadJson()">Load Json</button>
      <br />
      <br />
      <ng-container *ngFor="let obj of jsonObject; trackBy: trackByFunc">
        <div class="row row-cols-3">
          <span>{{ obj.id }}</span> <span>{{ obj.name }}</span>
          <span>{{ obj.location }}</span>
        </div>
        <br />
      </ng-container>
    </div>

    <br />
    <br />
  `,
  styleUrls: ['./child.component.css'],
  styles: ['.active { font-weight: normal; }'],
})
export class ChildComponent implements OnInit {
  @Input() isSelect: boolean = false;
  @Output() showAlert = new EventEmitter();

  listOfCourses = [];

  isDevelopment = false;

  viewMode = 'map';

  constructor() {}

  changeBg() {
    if (this.isSelect) {
      this.isSelect = false;
    } else {
      this.isSelect = true;
    }
    this.showAlert.emit(this.isSelect ? '.bg-danger' : '.bg-dark');
  }

  jsonObject: Array<IUser> = [
    {
      name: 'user 1',
      id: '101',
      location: 'Singapore',
    },
    {
      name: 'user 2',
      id: '102',
      location: 'Dubai',
    },
    {
      name: 'user 3',
      id: '103',
      location: 'Quatar',
    },
  ];

  loadJson() {
    this.jsonObject = [
      {
        name: 'user 1',
        id: '101',
        location: 'Singapore',
      },
      {
        name: 'user 2',
        id: '102',
        location: 'Dubai',
      },
      {
        name: 'user 3',
        id: '103',
        location: 'Quatar',
      },
    ];
  }

  trackByFunc(index, user) {
    console.log('index = ' + index);
    console.log('User = ' + JSON.stringify(user));
    return user.id;
  }

  ngOnInit(): void {}
}

interface IUser {
  name: string;
  id: number | string;
  location: string;
}
