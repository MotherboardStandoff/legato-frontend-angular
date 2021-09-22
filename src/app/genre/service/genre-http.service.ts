import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { handleHttpError } from 'src/app/shared/function/http-error-handler';
import { ICreateLibraryObject } from 'src/app/shared/interface/iCreate-library-object';
import { environment } from 'src/environments/environment';
import { Genre } from '../model/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreHttpService {

  private readonly _URL: string = `${environment.api}/genres`;

  constructor(private _http: HttpClient) { }

  public getGenres(): Observable<Genre[]> {

    return this._http.get<Genre[]>(this._URL).pipe(catchError(handleHttpError));
  }

  public getGenre(genreID: string): Observable<Genre> {

    return this._http.get<Genre>(`${this._URL}/${genreID}`).pipe(catchError(handleHttpError));
  }

  public getGenreAlbums(genreID: string): Observable<Genre> {

    return this._http.get<Genre>(`${this._URL}/${genreID}/albums`).pipe(catchError(handleHttpError));
  }

  public postGenre(newGenre: ICreateLibraryObject): Observable<Genre> {

    return this._http.post<Genre>(this._URL, newGenre).pipe(catchError(handleHttpError));
  }

  public updateGenre(genreID: string, updatedGenre: ICreateLibraryObject): Observable<Genre> {

    return this._http.put<Genre>(`${this._URL}/${genreID}`, updatedGenre).pipe(catchError(handleHttpError));
  }

  public deleteGenre(genreID: string): Observable<any> {

    return this._http.delete<any>(`${this._URL}/${genreID}`).pipe(catchError(handleHttpError));
  }
}
