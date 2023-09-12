import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {ScoreService} from './score.service';
import { TargetService } from './target.service';

import {TimerService} from "./timer.service";

const max = 1;

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent {
  score = 0;
  miss = 0
  amouseX = 0;
  amouseY = 0;

  maxX = window.innerWidth; // Maximální hodnota pro souřadnici x
  maxY = window.innerHeight; // Maximální hodnota pro souřadnici y

  // size of target (radius)
  offsetTarget = 30;

  targetPosition = {x: (this.maxX/2), y: (this.maxY/2)}; // Počáteční pozice terče

  constructor(private scoreService: ScoreService,
              private targetService: TargetService,
              private timerService: TimerService) {
    this.targetPosition = targetService.getTargetPosition();
  }


  /**
   * Calls when click on window, target clicked check and move target
   * @param event
   */
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    // Browser window
    this.maxY = window.innerHeight;
    let headerSize = (this.maxY * 0.1) + 20;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // header not clicked
    if (mouseY < (this.maxY - this.offsetTarget - headerSize)) {

      // Umístění X a Y relativně k oknu prohlížeče

      this.amouseX = mouseX;
      this.amouseY = mouseY;

      const targetPositionX = this.targetPosition.x;
      const targetPositionY = this.targetPosition.y;

      if (
        mouseX >= targetPositionX - this.offsetTarget &&
        mouseX <= targetPositionX + this.offsetTarget &&
        mouseY >= targetPositionY - this.offsetTarget &&
        mouseY <= targetPositionY + this.offsetTarget
      ) {
        // Kliknutí na terč
        this.onClickTarget();
        this.targetService.isFirstClickOnTarget = false; // první klik musí být na terč
      } else {
        // Kliknutí mimo terč
        // Je to první klik po restartu, ne ?
        if(!this.targetService.isFirstClickOnTarget){
          this.onMiss();
        }
      }
      // Je to první klik po restartu, ne ?
      if(!this.targetService.isFirstClickOnTarget) {
        this.moveTarget(); // Při kliknutí se terč přesune na novou pozici
      }
    }
  }

  onClickTarget() {
    // console.log('score' + this.score);
    // console.log('scoreService' + this.scoreService.getScoreData().score);

    // only when starting new game
    // if(this.scoreService.getScoreData().score == 0) {
    if(this.targetService.isFirstClickOnTarget) {
      this.timerService.setRunningInfoTo(0); // starting
      console.log('starting timer, target clicked');
      // console.log('onClickTarget()' + ', this.timerService.setRunningInfoTo(0)' + ', this.timerService.getRunningInfo() == ' + this.timerService.getRunningInfo())
    }

    this.score += 1;
    this.scoreService.incrementScore(1);
  }

  onMiss() {
    this.miss += 1;
    this.scoreService.incrementMisses();
  }

  moveTarget() {
    this.maxX = window.innerWidth;
    this.maxY = window.innerHeight;
    const minX = 0;
    const minY = 0;
    // console.log(`maxX = ${maxX}`);
    // console.log(`maxY = ${maxY}`);

    // Generujeme náhodné souřadnice pro novou pozici terče
    let newTargetX = Math.floor(Math.random() * (this.maxX - minX + 1)) + minX;
    let newTargetY = Math.floor(Math.random() * (this.maxY - minY + 1)) + minY;

    // okraje location !
    // footer (header) location ... header = 10% of screen + 20 padding !
    let headerSize = (this.maxY * 0.1) + 20;
    // console.log(`headerSize = ${headerSize}`);
    if (newTargetX < this.offsetTarget) {
      newTargetX = this.offsetTarget;
    }
    if (newTargetX > (this.maxX - this.offsetTarget)) {
      newTargetX = (this.maxX - this.offsetTarget);
    }
    if (newTargetY < this.offsetTarget) {
      newTargetY = this.offsetTarget;
    }
    if (newTargetY > (this.maxY - this.offsetTarget - headerSize)) {
      newTargetY = (this.maxY - this.offsetTarget - headerSize - 5);
    }

    // logika
    this.targetService.setTargetPosition(newTargetX, newTargetY);

    // Přesuneme terč na novou pozici
    // this.targetPosition.x = newTargetX;
    // this.targetPosition.y = newTargetY;
    this.targetPosition = this.targetService.getTargetPosition();
    // console.log(`target x = ${newTargetX} y = ${newTargetY}`);
    // console.log(`newTargetX: ${newTargetX}`);
    // console.log(`newTargetY: ${newTargetY}`);
  }
}
