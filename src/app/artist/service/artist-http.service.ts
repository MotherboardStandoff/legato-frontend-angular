import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { handleHttpError } from 'src/app/shared/function/http-error-handler';
import { ICreateLibraryObject } from 'src/app/shared/interface/iCreate-library-object';
import { environment } from 'src/environments/environment';
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

  public saveArtist(newArtist: ICreateLibraryObject): Observable<Artist> {

    return this._http.post<Artist>(`${this._url}`, newArtist).pipe(catchError(this.handleError));
  }

  public updateArtist(artistID: string, updatedArtist: ICreateLibraryObject): Observable<Artist> {

    return this._http.put<Artist>(`${this._url}/${artistID}`, updatedArtist).pipe(catchError(this.handleError));
  }

  public deleteArtist(artistID: string): Observable<any> {

    return this._http.delete<any>(`${this._url}/${artistID}`).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse): Observable<never> {

    return throwError(handleHttpError(err));
  }
}
