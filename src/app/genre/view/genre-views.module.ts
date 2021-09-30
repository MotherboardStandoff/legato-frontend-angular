import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreOverviewComponent } from './genre-overview/genre-overview.component';
import { GenreComponentsModule } from '../component/genre-components.module';



@NgModule({
  declarations: [
    GenreOverviewComponent
  ],
  imports: [
    CommonModule,
    GenreComponentsModule
  ],
  exports: [
    GenreOverviewComponent
  ]
})
export class GenreViewsModule { }
