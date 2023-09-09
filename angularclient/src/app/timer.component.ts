import {Component, OnInit} from '@angular/core';

import {TimerService} from "./timer.service";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit{
  timeLeft: string; // Počáteční čas
  timer: any;

  constructor(private timerService:TimerService) {
    this.timeLeft = this.timerService.getTime();
    // this.timer.startTimer();
  }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    this.timerService.setRunningInfoTo(true);
    this.timer = setInterval(() => {
      const timeArray = this.timeLeft.split(':');
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

        this.timeLeft = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      }
    }, 1000);
  }
}
