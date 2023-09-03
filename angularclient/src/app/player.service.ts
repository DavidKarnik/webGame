import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Player} from './player';
import {Observable} from 'rxjs';

// (Remove this line if running in the browser)
// import fetch from 'node-fetch';

// get data from GET request
type GetPlayersResponse = {
  data: Player[];
  // nickname: string;
  // score: number;
};


@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private playersUrl = '/api/players'; // URL backendového API pro načítání hráčů

  players: Player[] = []; // pole pro ukládání dat hráčů

  constructor(private http: HttpClient) {
  }

  /**
   * Get Array of players[]
   */
  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl); // Vracíme Observable pole hráčů
  }

  /**
   * Get Array of players[] with GET request
   */
  async getUsers() {
    try {
      // 👇️ const response: Response
      const response = await fetch(this.playersUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      // 👇️ const result: GetUsersResponse
      const result = (await response.json()) as GetPlayersResponse;

      console.log('result is: ', JSON.stringify(result, null, 4));

      // return result;
      return result.data;

    } catch (error) {
      if (error instanceof Error) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }

}



