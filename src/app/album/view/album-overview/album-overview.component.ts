import { Component, OnInit } from '@angular/core';
import { Album } from '../../model/album';
import { AlbumHttpService } from '../../service/album-http.service';

@Component({
  selector: 'lgto-album-overview',
  templateUrl: './album-overview.component.html',
  styleUrls: ['./album-overview.component.scss']
})
export class AlbumOverviewComponent implements OnInit {

  public albums: Album[] = [];
  public columns:string[] = ['name', 'artist', 'genre'];

  constructor(private _albumHttpService: AlbumHttpService) { }

  ngOnInit(): void {
    this.fetchAlbums()
  }

  public fetchAlbums(): void {

    this._albumHttpService.getAlbums().subscribe({
      next: albums => this.albums = albums,
      error: err => {

        console.error(err);
      }
    })
  }

}
