import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../../test-service.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  constructor(private svc: TestServiceService) {
      // serviço é acessível pq está importado no módulo pai (app)
      this.svc.printToConsole('Inner view component');
  }

  ngOnInit() {
  }

}
