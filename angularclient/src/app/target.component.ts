import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ScoreService } from './score.service';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent {
  score = 0;
  miss = 0

  targetPosition = { x: 100, y: 100 }; // Počáteční pozice terče
  targetRadius: number = 15; // Poloměr terče
  @ViewChild('target') targetRef!: ElementRef;

  constructor(private scoreService: ScoreService) { }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    // Zjistíme, jestli byl kliknut na terč (pomocí offsetTop a offsetLeft)
    const targetElement = this.targetRef.nativeElement;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    if (
      mouseX >= targetElement.offsetLeft &&
      mouseX <= targetElement.offsetLeft + targetElement.offsetWidth &&
      mouseY >= targetElement.offsetTop &&
      mouseY <= targetElement.offsetTop + targetElement.offsetHeight
    ) {
      // Kliknutí na terč
      this.onClickTarget();
    } else {
      // Kliknutí mimo terč
      this.onMiss();
    }
  }

  onClickTarget() {
    this.score += 1;
    this.scoreService.incrementScore(10);
    this.moveTarget(); // Při kliknutí na terč se přesune na novou pozici
  }

  onMiss() {
    this.miss += 1;
    this.scoreService.incrementMisses();
  }

  moveTarget() {
    const maxX = window.innerWidth - this.targetRadius * 2; // Maximální hodnota pro souřadnici x
    const maxY = window.innerHeight - this.targetRadius * 2; // Maximální hodnota pro souřadnici y

    // Generujeme náhodné souřadnice pro novou pozici terče
    const newTargetX = Math.floor(Math.random() * maxX);
    const newTargetY = Math.floor(Math.random() * maxY);

    // Přesuneme terč na novou pozici pouze pokud bylo kliknuto na terč
    if (this.isTargetClicked(newTargetX, newTargetY)) {
      this.targetPosition.x = newTargetX;
      this.targetPosition.y = newTargetY;

      // Přesuneme terč na novou pozici pomocí CSS transformace
      this.targetRef.nativeElement.style.transform = `translate(${this.targetPosition.x}px, ${this.targetPosition.y}px)`;
    }
  }

  private isTargetClicked(newX: number, newY: number): boolean {
    // Zjistíme, jestli bylo kliknuto na terč (pomoci offsetTop a offsetLeft)
    const targetElement = this.targetRef.nativeElement;

    return (
      newX >= targetElement.offsetLeft &&
      newX <= targetElement.offsetLeft + targetElement.offsetWidth &&
      newY >= targetElement.offsetTop &&
      newY <= targetElement.offsetTop + targetElement.offsetHeight
    );
  }
}
