import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { DependentComponent } from './dependent/dependent.component';
import { AuthComponent } from './auth/auth.component';
import { CrudService } from './crud.service';
import { FormsModule } from '@angular/forms';

const appRoute: Routes = [
    { path: '', component: AddressComponent}
  ];

@NgModule({
  declarations: [
    AddressComponent
  ],
  imports: [
    RouterModule.forChild(appRoute)
  ]
})
export class LazyModule { }
