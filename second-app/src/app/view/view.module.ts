import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponentComponent } from './view-component/view-component.component';
import { FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ViewComponentComponent],
  exports: [
    ViewComponentComponent // exportando o componente para ser utilizado pelo módulo externo
  ]
})
export class ViewModule { }
