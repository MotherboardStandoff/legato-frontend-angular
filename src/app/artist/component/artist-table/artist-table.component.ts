import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../../model/artist';

@Component({
  selector: 'lgto-artist-table',
  templateUrl: './artist-table.component.html',
  styleUrls: ['./artist-table.component.scss']
})
export class ArtistTableComponent implements OnInit {

  @Input('dataSource') public artists: Artist[] = [];
  @Input('displayedColumns') public displayedColumns: string[] = ['id', 'name', 'createdAt', 'updatedAt'];

  constructor() { }

  ngOnInit(): void {
  }

}
