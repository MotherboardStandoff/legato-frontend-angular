import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistTableComponent } from './artist-table/artist-table.component';
import { AngularMaterialModule } from 'src/app/shared/module/angular-material/angular-material.module';
import { ArtistFormComponent } from './artist-form/artist-form.component';



@NgModule({
  declarations: [
    ArtistTableComponent,
    ArtistFormComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    ArtistTableComponent,
    ArtistFormComponent
  ]
})
export class ArtistComponentsModule { }
