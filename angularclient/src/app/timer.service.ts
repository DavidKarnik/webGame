import {Injectable} from "@angular/core";

// pro uchování informací o timeru, pro sdílení dat
@Injectable({
  providedIn: 'root'
})
export class TimerService {
  timeLeft: string = '0:30'; // Počáteční čas
  running: boolean = false;

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

  setRunningInfoTo(_running: boolean) {
    this.running = _running;
  }
}
