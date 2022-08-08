import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Account1Component } from './account1/account1.component';
import { Account2Component } from './account2/account2.component';



@NgModule({
  declarations: [
    Account1Component,
    Account2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [Account1Component, Account2Component]
})
export class AccountModule { }
