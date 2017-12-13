import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CrudService } from './../crud.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  name = '';
  email = '';
  password = '';
  msg;
  isTrue = false;
  constructor(private crud: CrudService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  submission() {
    let obj = { "name": this.name, "email": this.email, "password": this.password }
    this.crud.authenticate(obj).subscribe((data) => {
      this.msg = data.msg;
      if (data.token) {
        localStorage.setItem('testObject', JSON.stringify(data.token));
        this.isTrue = true;
      }

      if(data.msg == 'Token received from server end !!') {
        this.crud.open.emit('LoggedIn');
      }
    });
  }

  validateToken() {
    var retrievedObject = localStorage.getItem('testObject');
    this.crud.validateJWT().subscribe((data) => {
      this.msg = data.msg;
    })
  }
}
