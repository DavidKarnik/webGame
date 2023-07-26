import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {ScoreService} from './score.service';

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

  targetPosition = {x: 100, y: 100}; // Počáteční pozice terče

  constructor(private scoreService: ScoreService) {
  }


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
      } else {
        // Kliknutí mimo terč
        this.onMiss();
        this.moveTarget();
      }
    }
  }

  onClickTarget() {
    this.score += 1;
    this.scoreService.incrementScore(1);
    this.moveTarget(); // Při kliknutí na terč se přesune na novou pozici
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


    // Přesuneme terč na novou pozici
    this.targetPosition.x = newTargetX;
    this.targetPosition.y = newTargetY;
    // console.log(`target x = ${newTargetX} y = ${newTargetY}`);
    // console.log(`newTargetX: ${newTargetX}`);
    // console.log(`newTargetY: ${newTargetY}`);
  }
}
