import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScoreService } from './score.service';
import { ScoreModel } from './score.model';
import {Player} from "./player";
import {UserService} from "./aaaUser.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // constructor(private http: HttpClient) { }
  scoreData: ScoreModel;

  players: Player[] = []; // pole pro ukládání dat hráčů

  @ViewChild('myModal') modal!: ElementRef;

  constructor(private scoreService: ScoreService, private userService: UserService) {
    this.scoreData = this.scoreService.getScoreData();
  }

  // spustí se po konstruktoru
  ngOnInit() {
    // Tento cyklus se spouští pouze jednou po konstrukci komponenty a při prvním renderování na obrazovku
    // Při inicializaci komponenty získáme skóre z backendu
    this.userService.findAll().subscribe(data => {
      this.players = data;
    });
  }

  @HostListener('document:click', ['$event'])
  onClickGetScore(event: MouseEvent) {
    // on every click REFRESH score
    this.scoreData = this.scoreService.getScoreData();
    // console.log("onClickGetScore(event: MouseEvent) called")
  }

  targetClick() {

  }

  targetMiss() {

  }

  // Metoda pro resetování skóre na nulu
  reset() {
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
   * Modal IS OPEN and is clicked outside of the modal window -> close modal
   * @param event - Mouse click
   */
  onOutsideClick(event: MouseEvent) {
    console.log(`onOutsideClick() run`)
    if (this.modal && event.target === this.modal.nativeElement) {
      this.modal.nativeElement.style.display = "none";
    }
  }

}
