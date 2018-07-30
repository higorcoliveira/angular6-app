import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  @Input('user') user: User; // atributo do componente
  isCollapsed: boolean = true;

  constructor() {
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  // de acordo com o ciclo de vida, para o parametro ser calculado, é preciso ir no ngOnInit
  ngOnInit() {
  }
}
