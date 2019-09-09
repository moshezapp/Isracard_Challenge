import { FavoritesComponent } from './favorites/favorites.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'' , component:SearchComponent},
  {path:'favorites' , component:FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
