import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interfaces/user.interfaces';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  user: User;
  userId: string;
  available: boolean = false;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.userId)
    .subscribe((user: User) => this.user = user);
  }

  showUsersList() {
    this.router.navigate(['users']);
  }

  editUser() {
    this.available = true;
  }

  saveUser() {
    this.available = false;
  }

}
