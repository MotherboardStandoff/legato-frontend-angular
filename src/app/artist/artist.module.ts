import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { AngularMaterialModule } from '../shared/module/angular-material/angular-material.module';
import { ArtistComponentsModule } from './component/artist-components.module';
import { ArtistViewsModule } from './view/artist-views.module';
import { ArtistComponent } from './artist.component';


@NgModule({
  declarations: [
    ArtistComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ArtistRoutingModule
  ],
  exports: []
})
export class ArtistModule { }
