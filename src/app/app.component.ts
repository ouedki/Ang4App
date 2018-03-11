import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts={
    name: "Yassine",
    email: "yassine@gmail.com",
    tel: "123456"
  }
}
