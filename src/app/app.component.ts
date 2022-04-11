import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dataToBePassed = {
    isSelect: false,
  };

  outputFunction(bgColor: string) {
    alert('Change to ' + bgColor);
  }

  title = 'my-first-angular-app';
}
