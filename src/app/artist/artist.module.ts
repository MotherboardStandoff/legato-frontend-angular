import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistTableComponent } from './component/artist-table/artist-table.component';
import { ArtistsOverviewComponent } from './view/artist/artists-overview/artists-overview.component';
import { AngularMaterialModule } from '../shared/module/angular-material/angular-material.module';
import { ArtistComponentsModule } from './module/artist-components/artist-components.module';
import { ArtistViewsModule } from './module/artist-views/artist-views.module';


@NgModule({
  declarations: [
    ArtistTableComponent,
    ArtistsOverviewComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ArtistRoutingModule,    
    ArtistComponentsModule,
    ArtistViewsModule
  ],
  exports: [
    ArtistTableComponent,
    ArtistsOverviewComponent
  ]
})
export class ArtistModule { }
