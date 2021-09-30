import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumTableComponent } from './album-table/album-table.component';
import { AngularMaterialModule } from 'src/app/shared/module/angular-material/angular-material.module';



@NgModule({
  declarations: [
    AlbumTableComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    AlbumTableComponent
  ]
})
export class AlbumComponentsModule { }
