import { Component, OnInit } from '@angular/core';
import { User } from './address-card/user.model';
import { TestServiceService } from './test-service.service';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: User;
  input = 'Initial value';

  // injetando o serviço
  constructor(private svc: TestServiceService, private http: HttpClient) {
    this.svc.printToConsole('My angular application');
    // constroi o objeto que será passado como parametro
    this.user = new User();
    this.user.name = 'Paul';
    this.user.designation = 'Software Developer';
    this.user.address = '1000 Street';
    this.user.phone = [
      '123-123'
    ];
  }

  ngOnInit() {
    const obs = this.http.get('https://api.github.com/users/higorcoliveira');
    obs.subscribe((response) => console.log(response));
  }
}
