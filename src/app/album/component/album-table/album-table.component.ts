import { Component, Input, OnInit } from '@angular/core';
import { SiteSettings } from 'src/app/shared/settings/site-settings';
import { Album } from '../../model/album';

@Component({
  selector: 'lgto-album-table',
  templateUrl: './album-table.component.html',
  styleUrls: ['./album-table.component.scss']
})
export class AlbumTableComponent implements OnInit {

  @Input('dataSource') public albums: Album[] = [];
  @Input('displayedColumns') public displayedColumns: string[] = ['id', 'name', 'artist', 'genre', 'createdAt', 'updatedAt'];

  public readonly DATE_FORMAT: string = SiteSettings.dateFormat;

  constructor() { }

  ngOnInit(): void {
  }

}
