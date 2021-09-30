import { Component, OnInit } from '@angular/core';
import { Genre } from '../../model/genre';
import { GenreHttpService } from '../../service/genre-http.service';

@Component({
  selector: 'lgto-genre-overview',
  templateUrl: './genre-overview.component.html',
  styleUrls: ['./genre-overview.component.scss']
})
export class GenreOverviewComponent implements OnInit {

  public genres: Genre[] = [];
  public columns: string[] = ['name', 'createdAt', 'updatedAt'];

  constructor(private _genreHttpService: GenreHttpService) { }

  ngOnInit(): void {

    this.getGenres();
  }

  public getGenres(): void {

    this._genreHttpService.getGenres().subscribe({

      next: genres => {

        this.genres = genres;
      },
      error: err => {

        alert(err);
      }
    })
  }

}
