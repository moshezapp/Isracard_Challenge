import { ReposFavoritesService } from './../repos-favorites.service';
import { Repo } from './../Models/Repo';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReposSearchService } from '../repos-search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  repoList : any[] = []; //all results from github API

  searchServiceSubscription : Subscription; //subscription to observable, held for destroy
  constructor(
    private searchService : ReposSearchService,
    private favService : ReposFavoritesService
  ) { }

  ngOnInit() {
    this.repoList = this.searchService.repoList; //after returning from another component the search list will show last results
    this.searchServiceSubscription = this.searchService.eventEmitter$.subscribe(res => this.repoList = res); 

    this.favService.getAllFavorites();
  }

  ngOnDestroy() {
    this.searchServiceSubscription.unsubscribe();
  }
  
  getReposFromGH(searchStr : string) {
    this.searchService.getReposFromGH(searchStr);
  }

  //adds a repo to the favorites repo list, updates the server and local array
  addToFav(repo) {
    this.favService.addToFav(repo);
  }

  //for UI. checks if the repo is already chosed as favorite so the button "add to favorite" will be disable
  isFavorite(repo_id) {
    return this.favService.isFavorite(repo_id);
  }
}
