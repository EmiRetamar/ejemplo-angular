import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public user: User;
  private token: string;

  // @Output() userEvent = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    const userId = this.route.snapshot.params.id;
    this.token = this.localStorageService.getItem('token');
    // this.token = this.route.snapshot.params['access_token'];
    this.userService.getUser(userId, this.token)
    .subscribe(user => {
      console.log(user);
      this.user = user;
    });
  }

}
