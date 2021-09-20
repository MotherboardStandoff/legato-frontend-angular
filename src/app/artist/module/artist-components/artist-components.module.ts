import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistTableComponent } from '../../component/artist-table/artist-table.component';



@NgModule({
  declarations: [
    ArtistTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArtistTableComponent
  ]
})
export class ArtistComponentsModule { }
