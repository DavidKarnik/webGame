import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

import {TimerService} from "./timer.service";

import {TargetService} from "./target.service";

import {ScoreModel} from "./score.model";
import {ScoreService} from "./score.service";

import {PlayerService} from "./player.service";
import {PlayerModel} from "./player.model";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent {
  // timeLeft: string; // Počáteční čas
  timer: any;

  scoreData: ScoreModel;

  @ViewChild('resultModal') modal!: ElementRef;

  nickname: string = ''; // Inicializace proměnné pro nickname

  constructor(public timerService: TimerService,
              public targetService: TargetService,
              private scoreService: ScoreService,
              private playerService: PlayerService) {
    this.scoreData = this.scoreService.getScoreData();
  }

  @HostListener('document:click', ['$event'])
  onClickCheckRunTimer(event: MouseEvent) {
    if (this.timerService.getRunningInfo() == 0) {
      this.startTimer();
    }
  }

  startTimer() {
    this.timerService.setRunningInfoTo(1);
    this.timer = setInterval(() => {
      // Reset button pushed ?
      if (this.timerService.getRunningInfo() == 2) {
        clearInterval(this.timer);
        return;
      }
      const timeArray = this.timerService.getTime().split(':');
      let minutes = +timeArray[0];
      let seconds = +timeArray[1];

      if (minutes === 0 && seconds === 0) {
        // Čas vypršel, odešlete skóre na backend
        // this.timerService.sendScoreToBackend();
        this.timerService.setRunningInfoTo(3); // timer end
        this.showResults();
        clearInterval(this.timer);
      } else {
        if (seconds === 0) {
          minutes--;
          seconds = 59;
        } else {
          seconds--;
        }

        this.timerService.setTime(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
      }
    }, 1000);
  }

  showResults() {
    if (this.modal) {
      this.modal.nativeElement.style.display = "block";
    }
  }

  closeResults() {
    if (this.modal) {
      this.modal.nativeElement.style.display = "none";
    }
  }

  // saveResults() {
  //   let _player: PlayerModel = {
  //     // // TODO id ok?
  //     // id: "id",
  //     score: this.scoreData.score,
  //     nickname: this.nickname
  //   };
  //
  //   this.playerService.save(_player);
  //
  //   console.log('Data send to backend!')
  //   // TODO Some info text (successfully send data to backend for example)
  //   // close
  //   if (this.modal) {
  //     this.modal.nativeElement.style.display = "none";
  //   }
  // }

  saveResults() {
    const nickname = this.nickname;
    const score = this.scoreData.score;
    this.playerService.save(nickname, score);
    // TODO Some info text (successfully send data to backend for example)
    // close
    if (this.modal) {
      this.modal.nativeElement.style.display = "none";
    }
  }
}
