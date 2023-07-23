import { Injectable } from '@angular/core';
import { ScoreModel } from './score.model';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private scoreData: ScoreModel = { score: 0, misses: 0 };

  constructor() { }

  getScoreData(): ScoreModel {
    return this.scoreData;
  }

  incrementScore(score: number) {
    this.scoreData.score += score;
  }

  incrementMisses() {
    this.scoreData.misses++;
  }
  updateScore(score: number) {
    this.scoreData.score = score;
  }

  updateMisses(num: number) {
    this.scoreData.misses = num;
  }

  reset() {
    this.updateScore(0);
    this.updateMisses(0);
  }
}
