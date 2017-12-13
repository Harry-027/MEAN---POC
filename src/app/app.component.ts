import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showHide = false;
  constructor(private router: Router,private service: CrudService) {
    this.service.open.subscribe((data) => {
      if(data == 'LoggedIn') {
        this.showHide = true;
      }
    });
  }
  redirect() {
    this.router.navigate(['/']);
  }
  rest() {
    document.location.reload() 
    this.showHide = false;
  }
}
