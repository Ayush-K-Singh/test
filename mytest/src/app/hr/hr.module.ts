import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hr1Component } from './hr1/hr1.component';
import { Hr2Component } from './hr2/hr2.component';



@NgModule({
  declarations: [
    Hr1Component,
    Hr2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [Hr1Component, Hr2Component]
})
export class HrModule { }
