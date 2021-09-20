import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './artist.component';
import { ArtistsOverviewComponent } from './view/artist/artists-overview/artists-overview.component';

const routes: Routes = [
  {
    path: 'artists', component: ArtistComponent, children: [
      { path: 'overview', component: ArtistsOverviewComponent },
      { path: '**', redirectTo: 'overview', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
