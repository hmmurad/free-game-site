import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Game } from 'src/app/Models/game-model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css'],
})
export class GameDetailComponent implements OnInit {
  id: string;
  game: Game;

  constructor(private route: ActivatedRoute, private _api: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = param['id'];
      console.log(this.id);
      if (this.id) {
        this.getGame(this.id);
      }
    });
  }

  getGame(id: string) {
    this._api.getGame(id).subscribe((game) => {
      if (game) {
        console.log(this.game);
        this.game = game;
      }
    });
  }
}
