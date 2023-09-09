import {Injectable} from "@angular/core";

// pro uchování informací o timeru, pro sdílení dat
@Injectable({
  providedIn: 'root'
})
export class TimerService {
  myTime = '0:30'; // Počáteční čas
  timeLeft: string = this.myTime; // Zbývající čas
  // 0 -> stopped, waiting for start
  // 1 -> running atm
  // 2 -> stopped by timer end, timer == 00:00
  running: number = 0;

  sendScoreToBackend() {
    // Zde můžete implementovat logiku pro odeslání skóre na backend
    console.log('sendScoreToBackend()');
  }

  setTime(_time: string) {
    this.timeLeft = _time;
  }

  getTime() {
    return this.timeLeft;
  }

  resetTimer() {
    this.timeLeft = this.myTime;
    this.setRunningInfoTo(2); // zastaveno resetem
    // console.log('resetTimer()' + ', this.setRunningInfoTo(2)' + ', this.getRunningInfo() == ' + this.getRunningInfo())
  }

  setRunningInfoTo(_running: number) {
    this.running = _running;
  }

  getRunningInfo() {
    return this.running;
  }
}
