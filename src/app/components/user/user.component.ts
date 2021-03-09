import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input('user') user: User;

  constructor(private router: Router) { }

  ngOnInit() { }

  userDetail(userId: number) {
    this.router.navigate([`/constructoras/${userId}`]);
  }

}
