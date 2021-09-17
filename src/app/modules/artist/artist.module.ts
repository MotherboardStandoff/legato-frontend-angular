import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistTableComponent } from '../../components/artist-table/artist-table.component';
import { ArtistsOverviewComponent } from '../../views/artist/artists-overview/artists-overview.component';


@NgModule({
  declarations: [
    ArtistTableComponent,
    ArtistsOverviewComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule
  ],
  exports: [
    ArtistTableComponent
  ]
})
export class ArtistModule { }
