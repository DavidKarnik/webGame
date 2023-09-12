import {Component, HostListener, OnInit} from '@angular/core';

import {TimerService} from "./timer.service";

import {TargetService} from "./target.service";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent {
  // timeLeft: string; // Počáteční čas
  timer: any;

  constructor(public timerService:TimerService,
              public targetService: TargetService) { }

  @HostListener('document:click', ['$event'])
  onClickCheckRunTimer(event: MouseEvent) {
    if(this.timerService.getRunningInfo() == 0) {
      this.startTimer();
    }
  }

  startTimer() {
    this.timerService.setRunningInfoTo(1);
    this.timer = setInterval(() => {
      // Reset button pushed ?
      if(this.timerService.getRunningInfo() == 2) {
        clearInterval(this.timer);
        return;
      }
      const timeArray = this.timerService.getTime().split(':');
      let minutes = +timeArray[0];
      let seconds = +timeArray[1];

      if (minutes === 0 && seconds === 0) {
        // Čas vypršel, odešlete skóre na backend
        this.timerService.sendScoreToBackend();
        this.timerService.setRunningInfoTo(3); // timer end
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

}
