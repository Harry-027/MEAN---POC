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


const appRoutes: Routes = [
  { path: '', component: AuthComponent, pathMatch :'full' },
  { path: 'address/load', loadChildren: 'app/lazy.module#LazyModule' },
  { path: 'dependent', component: DependentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DependentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
