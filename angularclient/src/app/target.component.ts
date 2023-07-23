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

  targetPosition = {x: 100, y: 100}; // Počáteční pozice terče

  constructor(private scoreService: ScoreService) {
  }


  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Umístění X a Y relativně k oknu prohlížeče
    const offsetTarget = 30;

    this.amouseX = mouseX;
    this.amouseY = mouseY;

    const targetPositionX = this.targetPosition.x;
    const targetPositionY = this.targetPosition.y;

    if (
      mouseX >= targetPositionX - offsetTarget &&
      mouseX <= targetPositionX + offsetTarget &&
      mouseY >= targetPositionY - offsetTarget &&
      mouseY <= targetPositionY + offsetTarget
    ) {
      // Kliknutí na terč
      this.onClickTarget();
    } else {
      // Kliknutí mimo terč
      this.onMiss();
      this.moveTarget();
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
    const maxX = window.innerWidth; // Maximální hodnota pro souřadnici x
    const maxY = window.innerHeight; // Maximální hodnota pro souřadnici y
    const minX = 0;
    const minY = 0;
    // const maxX = 1600;
    // const maxY = 700;

    // Generujeme náhodné souřadnice pro novou pozici terče
    const newTargetX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    const newTargetY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

    // Přesuneme terč na novou pozici
    this.targetPosition.x = newTargetX;
    this.targetPosition.y = newTargetY;
    // console.log(`newTargetX: ${newTargetX}`);
    // console.log(`newTargetY: ${newTargetY}`);
  }
}
