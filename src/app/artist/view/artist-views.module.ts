import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsOverviewComponent } from './artists-overview/artists-overview.component';
import { ArtistComponentsModule } from '../component/artist-components.module';
import { AngularMaterialModule } from 'src/app/shared/module/angular-material/angular-material.module';



@NgModule({
  declarations: [
    ArtistsOverviewComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ArtistComponentsModule
  ],
  exports: [
    ArtistsOverviewComponent
  ]
})
export class ArtistViewsModule { }
