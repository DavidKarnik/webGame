import {Component, OnInit} from '@angular/core';

import {TimerService} from "./timer.service";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit{
  // timeLeft: string; // Počáteční čas
  timer: any;

  constructor(public timerService:TimerService) {
    // public timerService kvůli využití v timer.component.html
    // this.timeLeft = this.timerService.getTime();
    // this.timer.startTimer();
  }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    this.timerService.setRunningInfoTo(true);
    this.timer = setInterval(() => {
      const timeArray = this.timerService.getTime().split(':');
      let minutes = +timeArray[0];
      let seconds = +timeArray[1];

      if (minutes === 0 && seconds === 0) {
        // Čas vypršel, odešlete skóre na backend
        this.timerService.sendScoreToBackend();
        this.timerService.setRunningInfoTo(false);
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
