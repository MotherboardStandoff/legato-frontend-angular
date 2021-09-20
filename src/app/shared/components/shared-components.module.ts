import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureHeaderComponent } from './feature-header/feature-header.component';



@NgModule({
  declarations: [
    FeatureHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeatureHeaderComponent
  ]
})
export class SharedComponentsModule { }
