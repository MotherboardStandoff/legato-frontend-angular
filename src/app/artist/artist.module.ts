import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist.component';
import { SharedComponentsModule } from '../shared/components/shared-components.module';


@NgModule({
  declarations: [
    ArtistComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    ArtistRoutingModule
  ],
  exports: []
})
export class ArtistModule { }
