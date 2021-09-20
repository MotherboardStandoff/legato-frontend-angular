import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { handleHttpError } from 'src/app/shared/function/http-error-handler';
import { environment } from 'src/environments/environment.prod';
import { Artist } from '../model/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistHttpService {

  private readonly _url: string = `${environment.api}/artists`

  constructor(private _http: HttpClient) { }

  public getArtists(): Observable<Artist[]> {

    return this._http.get<Artist[]>(this._url).pipe(catchError(this.handleError));
  }

  public getArtist(artistID: string) {

    return this._http.get<Artist>(`${this._url}/${artistID}`).pipe(catchError(this.handleError));
  }

  public getArtistAndAlbums(artistID: string) {
    return this._http.get<Artist>(`${this._url}/${artistID}/albums`).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse): Observable<never> {

    return throwError(handleHttpError(err));
  }
}
