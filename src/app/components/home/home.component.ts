import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIResponse, Game } from 'src/app/Models/game-model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  games: Game[] = [];
  p: number = 1;

  constructor(private _api: ApiService, private router: Router) {}
  ngOnInit() {
    this._api.getGames().subscribe((data) => {
      this.games = data;
    });
  }

  onDetail(id: number) {
    console.log(id);
    this.router.navigate(['details', id]);
  }
}
