import {Component, HostListener, OnInit} from '@angular/core';

import {TimerService} from "./timer.service";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit{
  // timeLeft: string; // Počáteční čas
  timer: any;

  // running: boolean = false;

  constructor(public timerService:TimerService) {
    // public timerService kvůli využití v timer.component.html
    // this.timeLeft = this.timerService.getTime();
    // this.timer.startTimer();
  }

  ngOnInit(): void {
    // this.startTimer();
  }

  // TODO Blbost, takhle to nejde, vždy po startu se bude spoštět... vyřešit jinak
  @HostListener('document:click', ['$event'])
  onClickCheckRunTimer(event: MouseEvent) {
    // console.log('onClickCheckRunTimer() timer' + ', this.timerService.getRunningInfo() == ' + this.timerService.getRunningInfo())
    if(this.timerService.getRunningInfo() == 0) {
      // console.log('if -> this.timerService.getRunningInfo() == 0' + 'this.startTimer();')
      this.startTimer();
      // this.timerService.setRunningInfoTo(1);
    }
  }

  startTimer() {
    this.timerService.setRunningInfoTo(1);
    this.timer = setInterval(() => {
      // Reset button pushed ?
      if(this.timerService.getRunningInfo() == 2) {
        // clearInterval(this.timer);
        this.stopTimer();
        // this.running = false;
        return;
      }
      const timeArray = this.timerService.getTime().split(':');
      let minutes = +timeArray[0];
      let seconds = +timeArray[1];

      if (minutes === 0 && seconds === 0) {
        // Čas vypršel, odešlete skóre na backend
        this.timerService.sendScoreToBackend();
        this.timerService.setRunningInfoTo(2);
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

  stopTimer() {
    clearInterval(this.timer);
    // this.timerService.setRunningInfoTo(0); // Nastavte běžící informace na 0 (zastaveno, čeká)
  }

}
