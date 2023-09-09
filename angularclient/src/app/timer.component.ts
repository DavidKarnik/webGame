import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  timeLeft: string = '0:30'; // Počáteční čas
  timer: any;

  constructor() {}

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      const timeArray = this.timeLeft.split(':');
      let minutes = +timeArray[0];
      let seconds = +timeArray[1];

      if (minutes === 0 && seconds === 0) {
        // Čas vypršel, odešlete skóre na backend
        this.sendScoreToBackend();
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

  sendScoreToBackend() {
    // Zde můžete implementovat logiku pro odeslání skóre na backend
  }
}
