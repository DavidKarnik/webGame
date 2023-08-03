import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScoreService } from './score.service';
import { ScoreModel } from './score.model';
import { PlayerService } from './player.service';
import {PlayerModel} from "./player.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // constructor(private http: HttpClient) { }
  scoreData: ScoreModel;

  players: PlayerModel[] = []; // pole pro ukládání dat hráčů

  @ViewChild('myModal') modal!: ElementRef;

  constructor(private scoreService: ScoreService, private playerService: PlayerService) {
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
    if (this.modal) {
      this.modal.nativeElement.style.display = "block";
    }
  }

  /**
   * Just close modal Leaderboard
   */
  closeLeaderboard() {
    if (this.modal) {
      this.modal.nativeElement.style.display = "none";
    }
  }

  /**
   * Modal is open and is clicked outside of modal window -> close modal
   * @param event - Mouse click
   */
  onOutsideClick(event: MouseEvent) {
    console.log(`onOutsideClick() run`)
    if (this.modal && event.target === this.modal.nativeElement) {
      this.modal.nativeElement.style.display = "none";
    }
  }

  /**
   * Load players[] from PLayerService
   */
  loadPlayersData() {
    // Zavoláme službu pro načtení dat hráčů
    this.playerService.getPlayers().subscribe(
      (players: PlayerModel[]) => {
        this.players = players; // Uložíme načtená data do pole players
      },
      (error: any) => {
        console.error('Chyba při načítání dat hráčů: ', error);
      }
    );

    // this.players = this.playerService.getUsers();

    // const playersResponse = await this.playerService.getUsers();
    this.playerService.getUsers()
      .then((playersResponse) => {
        // const playersArray = playersResponse.data;
        const playersArray = playersResponse;
        console.log(playersArray);
      })
      .catch((error) => {
        console.error('Chyba:', error);
      });
  }
}
