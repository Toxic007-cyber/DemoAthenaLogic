import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { Leaderboard } from './quiz/leaderboard/leaderboard'; 


@Component({
  selector: 'app-leaderboard',
  standalone: true, // Ensuring it's standalone as per your structure
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './leaderboard.html',
  styleUrl: './leaderboard.css',
})
export class Leaderboard {
  // Add a players array so your table has data to show
  players = [
    { name: 'Alex_99', score: 1000, time: '1m 20s' },
    { name: 'Sarah_Dev', score: 950, time: '1m 45s' },
    { name: 'QuizMaster', score: 920, time: '2m 05s' }
  ];

  // This fixes the [ERROR] TS2339
  filter(type: string) {
    console.log('Filtering leaderboard by:', type);
    // As a 6th-sem student, you can later add logic here 
    // to sort the 'players' array based on the 'type'.
  }
}
