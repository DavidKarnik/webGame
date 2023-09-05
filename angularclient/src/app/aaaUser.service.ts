import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PlayerModel} from './player.model';
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

  public findAll(): Observable<PlayerModel[]> {
    return this.http.get<PlayerModel[]>(this.usersUrl);
  }

  public save(user: PlayerModel) {
    return this.http.post<PlayerModel>(this.usersUrl, user);
  }
}
