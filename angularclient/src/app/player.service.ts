import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {PlayerModel} from './player.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {

  private playersURL: string;
  private savePlayerURL : string;

  constructor(private http: HttpClient) {
    this.playersURL = 'http://localhost:8080/leaderboard';
    this.savePlayerURL = 'http://localhost:8080/save';
    // this.playersURL = 'http://localhost:8080/users';
  }

  public findAll(): Observable<PlayerModel[]> {
    return this.http.get<PlayerModel[]>(this.playersURL);
  }

  // public save(user: PlayerModel) {
  //   return this.http.post<PlayerModel>(this.savePlayerURL, user);
  // }

  save(nickname: string, score: number) {
    const playerData = {
      nickname: nickname,
      score: score,
    };

    console.log('results -> save()');

    return this.http.post(this.savePlayerURL, playerData).subscribe(
      (response) => {
        // Obsluha úspěšného POST požadavku
        console.log('Player saved successfully', response);
      },
      (error) => {
        // Obsluha chyby
        console.error('Error saving player', error);
      }
    );
  }

}
