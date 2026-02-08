import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Leaderboard {
  id?: number;
  username: string;
  score: number;
}

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  private apiUrl = 'http://localhost:8080/api/leaderboard';

  constructor(private http: HttpClient) {}

  getLeaderboard(): Observable<Leaderboard[]> {
    return this.http.get<Leaderboard[]>(this.apiUrl);
  }

  addScore(data: Leaderboard): Observable<Leaderboard> {
    return this.http.post<Leaderboard>(this.apiUrl, data);
  }
}
