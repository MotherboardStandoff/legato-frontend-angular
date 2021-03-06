import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreTableComponent } from './genre-table/genre-table.component';
import { AngularMaterialModule } from 'src/app/shared/module/angular-material/angular-material.module';



@NgModule({
  declarations: [
    GenreTableComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    GenreTableComponent
  ]
})
export class GenreComponentsModule { }
