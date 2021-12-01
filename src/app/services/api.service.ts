import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Game } from '../Models/game-model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${environment.BASE_URL}`);
  }

  getGameByCategory(category: string) {
    if (category) {
      let params = new HttpParams().set('category', category);
    }

    this.http.get(`${environment.BASE_URL}/category`);
  }

  getGame(id: string): Observable<Game> {
    let params = new HttpParams().set('id', id);
    return this.http.get<Game>(
      `https://free-to-play-games-database.p.rapidapi.com/api/game`,
      {
        params: params,
      }
    );
  }
}
