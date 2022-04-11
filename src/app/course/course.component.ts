import { CourseServices } from './course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `
  <h2>Hello {{title}}. {{getAnotherText()}}</h2>
  <ul>
    <li *ngFor="let course of courses">
      {{course}}
    </li>
  </ul>

  <div>
    {{courseName | uppercase}} <br>
    {{courseCredit | number : '1.2'}} <br>
    {{courseAmount | currency: 'AUD'}} <br>
    {{longText | summary: '30' }}

  </div>

  <div (click)="divClickHandler($event)" style="width: 200px; background-color: red; padding: 2px;">
    <button (click)="clickHandler($event)" class="btn btn-success">Click</button>
  </div>

  <br>
  <input type="text" #email (keyup.enter)="onKeyUp(email.value)">
  <br>

  <input type="text" [value]="name" (keyup.enter)="onEnter($event)">
  <input type="text" [(ngModel)]="fullName" (keyup.enter)="onEnter($event)">

  <br> <br>

  

  `,
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseName: string = "This is a course."
  courseCredit: number = 168.2
  courseAmount: number = 12000.0

  longText: string = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."

  colspan = "2";
  title: string = "Angular";
  courses: string[];
  getAnotherText: () => string;
  name: string = "My Name";
  fullName: string = "Full Name";

  constructor(service: CourseServices) {
    this.courses = service.getCourse();

    this.getAnotherText = service.getAnotherText;
  }

  clickHandler(event: any) {
    // this is how we can stop element bubbling by stopPropogation method.
    event?.stopPropagation()
    alert("Btn clicked.")
  }

  divClickHandler(event: any) {
    alert("Div is clicked.")
  }

  onKeyUp(emailValue: string) {
    alert(emailValue)
  }

  onEnter(event) {
    this.name = event.target.value;
    alert(this.name)
  }
  updateFullName(value: any) {
    alert(this.fullName);
  }

  ngOnInit(): void {
  }


}
