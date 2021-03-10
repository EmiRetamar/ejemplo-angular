import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  private token: string;
  public users: User[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['access_token'];
      this.localStorageService.setItem('token', this.token);
      this.getUsers();
    });
  }

  private getUsers() {
    this.userService.getUsers(this.token).subscribe(users => {
      console.log(users);
      this.users = users;
    });
  }

}
