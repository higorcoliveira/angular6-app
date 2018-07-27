import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;

  constructor() { // constroi o objeto que será passado como parametro
    this.user = new User();
    this.user.name = 'Paul';
    this.user.designation = 'Software Developer';
    this.user.address = '1000 Street';
    this.user.phone = [
      '123-123'
    ];
  }
}
