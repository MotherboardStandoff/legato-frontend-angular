import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistTableComponent } from './artist-table/artist-table.component';
import { AngularMaterialModule } from 'src/app/shared/module/angular-material/angular-material.module';



@NgModule({
  declarations: [
    ArtistTableComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    ArtistTableComponent
  ]
})
export class ArtistComponentsModule { }
