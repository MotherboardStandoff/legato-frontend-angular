import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumOverviewComponent } from './album-overview/album-overview.component';
import { AlbumComponentsModule } from '../component/album-components.module';



@NgModule({
  declarations: [
    AlbumOverviewComponent
  ],
  imports: [
    CommonModule,
    AlbumComponentsModule
  ],
  exports: [
    AlbumOverviewComponent
  ]
})
export class AlbumViewsModule { }
