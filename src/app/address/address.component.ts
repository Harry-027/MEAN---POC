import { Component, OnInit } from '@angular/core';
import { CrudService } from './../crud.service'

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  msg;
  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.crud.getAddress().subscribe((data) => {
      this.msg = data.msg;
    });
  }

}
