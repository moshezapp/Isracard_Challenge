import { Repo } from './Models/Repo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ReposFavoritesService {
  private eventEmitter = new Subject<any>();
  public eventEmitter$ = this.eventEmitter.asObservable(); //observable to send data on events to subscribers

  private serverAddr = environment.host_server; //back-end server dns name
  private protocol = environment.proto; //http/s

  favList : Repo[] = []; //local copy of favorites from server

  constructor(
    private http : HttpClient
  ) { }

    //getting all favorites list from server (stored in session)
    getAllFavorites() {
      this.http.get(this.protocol+"://"+this.serverAddr+"/api/Values/getAllFavorites", { withCredentials: true }).toPromise()
      .then( (res : string) => {
        this.favList = JSON.parse(res) ; 
        this.eventEmitter.next(this.favList);
      })
      .catch(() => console.log("ERROR IN GET"));
    }

    //adds repo to favorites
    addToFav(repo) {
      //updates the server for new repo
      this.http.post(this.protocol+"://"+this.serverAddr+"/api/Values/addToRepoList?repo_name="+ repo["name"] +"&owner_avatar="+ repo["owner"]["avatar_url"] +"&repo_id="+repo["id"], {}, { withCredentials: true }).toPromise()
      .then((res : string) => {
        this.favList = JSON.parse(res);
        this.eventEmitter.next(this.favList); //after server updated succefully, triggers event to subscribers with new favList
      })
      .catch( () => console.log("POST NOT WORKED"));
    }

    //checks if the repo_id is one of the favorites repos of user.
    isFavorite(repo_id) {
      let isFav = false; //sets flag to false
      Array.from(this.favList).forEach(element => {
        if(element.repo_id == repo_id) {
          isFav = true;
          return;
        }
      });
      return isFav; 
    }
}
