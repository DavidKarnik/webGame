import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importujte HttpClient
import { PlayerModel } from './player.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private playersUrl = '/api/players'; // Zde nahraďte URL backendového API pro načítání hráčů

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<PlayerModel[]> {
    return this.http.get<PlayerModel[]>(this.playersUrl); // Vracíme Observable pole hráčů
  }
}

