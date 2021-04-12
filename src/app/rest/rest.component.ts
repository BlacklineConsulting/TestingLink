import { Component, OnInit } from '@angular/core';
import {Users} from '../users';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  users: Users[] = [];
  firstName: any;
  p: number = 1;
  constructor(public rs: RestService) {

  }

  ngOnInit(): void {
    this.rs.getUsers().subscribe((response) => {
      this.Users = response;
    });
  }
  Search() {
    if (this.firstName == '') {
      this.ngOnInit();
    } else {
      this.users = this.users.filter(res => {
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      });
    }
  }
  key: string = 'id';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
