import {Component, HostListener, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScoreService } from './score.service';
import { ScoreModel } from './score.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // score: number = 0;
  // miss = 0;

  // constructor(private http: HttpClient) { }
  scoreData: ScoreModel;

  constructor(private scoreService: ScoreService) {
    this.scoreData = this.scoreService.getScoreData();
  }
  // spustí se po konstruktoru
  ngOnInit() {
    // Tento cyklus se spouští pouze jednou po konstrukci komponenty a při prvním renderování na obrazovku
    // Při inicializaci komponenty získáme skóre z backendu
    // this.getScoreFromBackend();
  }

  @HostListener('document:click', ['$event'])
  onClickGetScore(event: MouseEvent) {
    // on every click refresh score
    this.scoreData = this.scoreService.getScoreData();
    // this.score = this.scoreData.score;
    // this.miss = this.scoreData.misses;
  }

  // Metoda pro získání skóre z backendu
  getScoreFromBackend() {
    // this.http.get<number>('/api/score').subscribe(
    //   (score) => {
    //     this.score = score;
    //   },
    //   (error) => {
    //     console.error('Chyba při získávání skóre: ', error);
    //   }
    // );
  }

  targetClick() {

  }

  targetMiss() {

  }

  // Metoda pro resetování skóre na nulu
  reset() {
    // this.http.put<void>('/api/score', 0).subscribe(
    //   () => {
    //     this.score = 0;
    //   },
    //   (error) => {
    //     console.error('Chyba při resetování skóre: ', error);
    //   }
    // );
    // reset ScoreService values
    this.scoreService.reset();
  }

  // Metoda pro zobrazení tabulky s nejlepšími skóre (leaderboard)
  showLeaderboard() {
    // Zde implementovat kód pro zobrazení tabulky s nejlepšími skóre
    // například pomocí dialogu nebo jiného komponentu
  }
}
