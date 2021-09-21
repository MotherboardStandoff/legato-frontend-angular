import { Component, OnInit, ViewChild } from '@angular/core';
import { Artist } from './model/artist';

@Component({
  selector: 'lgto-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  public artists: Artist[] = []

  constructor() { }

  ngOnInit(): void { }

}
