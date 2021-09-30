import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/module/angular-material/angular-material.module';
import { ArtistModule } from './artist/artist.module';
import { ArtistViewsModule } from './artist/view/artist-views.module';
import { GenreViewsModule } from './genre/view/genre-views.module';
import { AlbumViewsModule } from './album/view/album-views.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    ArtistViewsModule,
    GenreViewsModule,
    AlbumViewsModule,
    // import site modules with child routing before AppRoutingModule
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
