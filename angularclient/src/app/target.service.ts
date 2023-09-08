import { Injectable } from '@angular/core';

// class for injeting and share same data between multiple components
@Injectable({
  providedIn: 'root',
})
export class TargetService {
  maxX = window.innerWidth; // Maximální hodnota pro souřadnici x
  maxY = window.innerHeight; // Maximální hodnota pro souřadnici y

  private targetPosition = {x: (this.maxX/2), y: (this.maxY/2)}; // Počáteční pozice terče

  setTargetPosition(x: number, y: number) {
    this.targetPosition.x = x;
    this.targetPosition.y = y;
  }

  getTargetPosition(): { x: number; y: number } {
    return this.targetPosition;
  }

  setTargetPositionToCenter() {
    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;
    this.setTargetPosition(centerX, centerY);
  }
}
