import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ScoreService} from './score.service';
import {ScoreModel} from './score.model';

import {PlayerModel} from "./player.model";
import {PlayerService} from "./player.service";

import {TargetService} from './target.service';

import {TimerService} from './timer.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  scoreData: ScoreModel;

  players: PlayerModel[] = []; // pole pro ukládání dat hráčů

  nickname: string = ''; // Inicializace proměnné pro nickname

  @ViewChild('myModal') modal!: ElementRef;

  constructor(private scoreService: ScoreService,
              private playerService: PlayerService,
              private targetService: TargetService,
              private timerService: TimerService) {
    this.scoreData = this.scoreService.getScoreData();
  }

  // spustí se po konstruktoru
  ngOnInit() {
    // Tento cyklus se spouští pouze jednou po konstrukci komponenty a při prvním renderování na obrazovku
    // Při inicializaci komponenty získáme skóre z backendu
    // .subscribe() -> slouží k sledování změn v toku událostí nebo dat, které emituje Observable, refresh je vždy,
    // když se změní hodnota v this.playerService.findAll()
    this.playerService.findAll().subscribe(data => {
      this.players = data;
    });
  }

  @HostListener('document:click', ['$event'])
  onClickGetScore(event: MouseEvent) {
    // on every click REFRESH score
    this.scoreData = this.scoreService.getScoreData();
    // console.log("onClickGetScore(event: MouseEvent) called")
  }


  // Metoda pro resetování skóre na nulu
  reset() {
    // reset ScoreService values
    this.scoreService.reset();
    this.targetService.setTargetPositionToCenter(); // center target
    this.timerService.resetTimer();
  }

  // Metoda pro zobrazení tabulky s nejlepšími skóre (leaderboard)
  showLeaderboard() {
    if (this.modal) {
      // refresh leaderboard data
      this.playerService.findAll().subscribe(data => {
        this.players = data;
      });
      this.modal.nativeElement.style.display = "block";
      // can not click svg target (any action except modal)
      // modal opened and timer stopped
      this.targetService.isModalOpened = true;
      this.timerService.setRunningInfoTo(2); // waiting for start (stopped)
    }
  }


  /**
   * Just close modal Leaderboard
   */
  closeLeaderboard() {
    if (this.modal) {
      this.modal.nativeElement.style.display = "none";
      // close modal -> reset
      this.targetService.isModalOpened = false;
      this.reset();
    }
  }

  // TODO Implement outside click, only click OUTSIDE of modal window
  // /**
  //  * Modal IS OPEN and is clicked outside of the modal window -> close modal
  //  * @param event - Mouse click
  //  */
  // onOutsideClick(event: MouseEvent) {
  //   console.log(`onOutsideClick() run`)
  //   // when outside modal is clicked or close modal cross button
  //   if (this.modal && event.target === this.modal.nativeElement) {
  //     this.modal.nativeElement.style.display = "none";
  //   }
  // }

}
