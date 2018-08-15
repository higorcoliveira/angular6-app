import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app';

  routes = [ // pegar dinamicamente as rotas com a diretiva ngFor
    { linkName: 'Home', url: 'home' },
    { linkName: 'Settings', url: 'settings' }
  ];
}
