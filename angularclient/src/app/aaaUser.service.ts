import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Player} from './player';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/leaderboard';
    // this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<Player[]> {
    return this.http.get<Player[]>(this.usersUrl);
  }

  public save(user: Player) {
    return this.http.post<Player>(this.usersUrl, user);
  }
}
