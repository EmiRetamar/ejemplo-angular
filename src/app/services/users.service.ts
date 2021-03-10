import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private apiUrl = 'http://localhost:5010/api/1/centroDeCostoConstructoras';

  constructor(private http: HttpClient) { }

  public getUsers(token: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}?access_token=${token}`)
    // .pipe(
    //   map(users => users[0])
    // );
  }

  public getUser(userId: number, token: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${userId}?access_token=${token}`);
  }

}
