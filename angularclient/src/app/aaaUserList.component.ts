import { Component, OnInit } from '@angular/core';
import {Player} from './player';
import { UserService } from './aaaUser.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './aaaUserList.html',
  // styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // @ts-ignore
  players: Player[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.players = data;
    });
  }
}
