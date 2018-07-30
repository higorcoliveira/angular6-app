import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponentComponent } from './view-component/view-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ViewComponentComponent],
  exports: [
    ViewComponentComponent // exportando o componente para ser utilizado pelo módulo externo
  ]
})
export class ViewModule { }
