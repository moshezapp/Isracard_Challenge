import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReposSearchService {
  private eventEmitter = new Subject<any>(); 
  public eventEmitter$ = this.eventEmitter.asObservable(); //observable to send data on events to subscribers

  url = "https://api.github.com/search/repositories?q="; 

  repoList : any[]; //all results from github API

  constructor(
    private http: HttpClient
  ) { }

    //gets repos list from github API
    getReposFromGH(searchStr : string) {
      this.http.get(this.url+searchStr).toPromise()
      .then(res => {
        this.repoList = res["items"]; //takes the important data from the response
        this.eventEmitter.next(this.repoList); //triggers event to all subscriptions
      });
    }
}
