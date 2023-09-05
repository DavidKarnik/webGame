import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PlayerModel} from './player.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {

  private playersURL: string;

  constructor(private http: HttpClient) {
    this.playersURL = 'http://localhost:8080/leaderboard';
    // this.playersURL = 'http://localhost:8080/users';
  }

  public findAll(): Observable<PlayerModel[]> {
    return this.http.get<PlayerModel[]>(this.playersURL);
  }

  public save(user: PlayerModel) {
    return this.http.post<PlayerModel>(this.playersURL, user);
  }
}
