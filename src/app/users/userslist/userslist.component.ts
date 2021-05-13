import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  public users: User[] = [];

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllUsers()
    .subscribe((users: User[]) => this.users = users);
  }

  showDetails(userId: number) {
    this.router.navigate([`user/${userId}`]);
  }

}
