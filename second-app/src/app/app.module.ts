import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { ViewModule } from './view/view.module';
import { TestServiceService } from './test-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AddressCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // importação do módulo para utilizar o ngForm,
    ViewModule, // importando módulo customizado
    HttpClientModule
  ],
  providers: [ // serviços utilizados
    TestServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
