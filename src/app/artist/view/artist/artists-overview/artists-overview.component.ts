import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/artist/model/artist';

@Component({
  selector: 'lgto-artists-overview',
  templateUrl: './artists-overview.component.html',
  styleUrls: ['./artists-overview.component.scss']
})
export class ArtistsOverviewComponent implements OnInit {

  public artists: Artist[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
