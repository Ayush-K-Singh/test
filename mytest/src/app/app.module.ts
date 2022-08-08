import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccountModule } from './account/account.module';
import { EmployeeModule } from './employee/employee.module';
import { HrModule } from './hr/hr.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    EmployeeModule,
    HrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
