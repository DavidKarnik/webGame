import {Injectable} from "@angular/core";

// pro uchování informací o timeru, pro sdílení dat
@Injectable({
  providedIn: 'root'
})
export class TimerService {
  myTime = '0:30'; // Počáteční čas
  timeLeft: string = this.myTime; // Zbývající čas
  // 0 -> starting !
  // 1 -> running atm
  // 2 -> stopped by reset, can start again
  // 3 -> stopped by timer end, timer == 00:00
  running: number = 2; // by default == 2

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
  }

  setRunningInfoTo(_running: number) {
    this.running = _running;
  }

  getRunningInfo() {
    return this.running;
  }
}
