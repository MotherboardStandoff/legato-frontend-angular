import { Component, Input, OnInit } from '@angular/core';
import { SiteSettings } from 'src/app/shared/settings/site-settings';
import { Genre } from '../../model/genre';

@Component({
  selector: 'lgto-genre-table',
  templateUrl: './genre-table.component.html',
  styleUrls: ['./genre-table.component.scss']
})
export class GenreTableComponent implements OnInit {

  @Input('dataSource') public genres: Genre[] = [];
  @Input('displayedColumns') public displayedColumns: string[] = ['id', 'name', 'createdAt', 'updatedAt'];

  public readonly DATE_FORMAT: string = SiteSettings.dateFormat;

  constructor() { }

  ngOnInit(): void {
  }

}
