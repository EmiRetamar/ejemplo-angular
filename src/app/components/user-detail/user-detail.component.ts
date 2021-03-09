import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public user: User;

  @Output() userEvent = new EventEmitter();

  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit() {
    const userId = this.route.snapshot.params.id;
    this.userService.getUser(userId)
    .subscribe(user => {
      console.log(user);
      this.user = user;
    });
  }

}
