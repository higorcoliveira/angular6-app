import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../../test-service.service';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  userName = '';
  response: any;

  constructor(private svc: TestServiceService, private http: HttpClient) {
      // serviço é acessível pq está importado no módulo pai (app)
      this.svc.printToConsole('Inner view component');
  }

  ngOnInit() {
  }

  search() {
    this.http.get(`https://api.github.com/users/${this.userName}`)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
      });
  }

}
