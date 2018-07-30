import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  printToConsole(arg) {
    console.log(arg);
  }
}
