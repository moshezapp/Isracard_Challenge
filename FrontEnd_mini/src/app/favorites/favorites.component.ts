import { Repo } from './../Models/Repo';
import { ReposFavoritesService } from './../repos-favorites.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit, OnDestroy {
  favList : Repo[] = []; //local copy of favorites from server

  favServiceSubscription : Subscription; //handler to unsubscribe on destroy of this compo.

  constructor(
    private favService : ReposFavoritesService
  ) { }

  ngOnInit() {
    this.favServiceSubscription = this.favService.eventEmitter$.subscribe(res => this.favList = res); //updates on real time for changes (can be done from another device or browser page)
    this.favService.getAllFavorites(); //triggers the observable of favService to send data (if exist)
  }

  ngOnDestroy() {
    this.favServiceSubscription.unsubscribe();
  }
}
