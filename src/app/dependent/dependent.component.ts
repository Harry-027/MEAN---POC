import { Component, OnInit } from '@angular/core';
import { CrudService } from './../crud.service'

@Component({
  selector: 'app-dependent',
  templateUrl: './dependent.component.html',
  styleUrls: ['./dependent.component.css']
})
export class DependentComponent implements OnInit {
  msg;
  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.crud.getDependent().subscribe((data) => {
      this.msg = data.msg;
    });
  }
}
