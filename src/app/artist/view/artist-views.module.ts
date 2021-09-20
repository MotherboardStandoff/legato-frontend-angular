import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsOverviewComponent } from './artists-overview/artists-overview.component';
import { ArtistComponentsModule } from '../component/artist-components.module';



@NgModule({
  declarations: [
    ArtistsOverviewComponent
  ],
  imports: [
    CommonModule,
    ArtistComponentsModule
  ],
  exports: [
    ArtistsOverviewComponent
  ]
})
export class ArtistViewsModule { }
