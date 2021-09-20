import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsOverviewComponent } from '../../view/artist/artists-overview/artists-overview.component';



@NgModule({
  declarations: [
    ArtistsOverviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArtistsOverviewComponent
  ]
})
export class ArtistViewsModule { }
