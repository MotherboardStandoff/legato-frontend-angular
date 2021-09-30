import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/artist/model/artist';
import { SiteSettings } from 'src/app/shared/settings/site-settings';
import { ArtistHttpService } from '../../service/artist-http.service';

@Component({
  selector: 'lgto-artists-overview',
  templateUrl: './artists-overview.component.html',
  styleUrls: ['./artists-overview.component.scss']
})
export class ArtistsOverviewComponent implements OnInit {

  public artists: Artist[] = [];
  public columns:string[] = ['name', 'createdAt', 'updatedAt'];

  constructor(private _artistHttpService: ArtistHttpService) { }

  ngOnInit(): void {


    this.fetchArtists();
  }

  public fetchArtists(): void {

    this._artistHttpService.getArtists().subscribe(
      {
        next: artists => {

          return this.artists = artists;
        },
        error: err => {

          alert(err);
        }
      }
    );
  }
}
