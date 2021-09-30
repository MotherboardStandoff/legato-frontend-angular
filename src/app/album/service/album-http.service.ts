import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { handleHttpError } from 'src/app/shared/function/http-error-handler';
import { environment } from 'src/environments/environment';
import { Album } from '../model/album';
import { AlbumViewsModule } from '../view/album-views.module';

@Injectable({
  providedIn: 'root'
})
export class AlbumHttpService {

  private readonly _URL: string = `${environment.api}/albums`;

  constructor(private _http: HttpClient) { }

  public getAlbums(): Observable<Album[]> {

    return this._http.get<Album[]>(this._URL).pipe(catchError(handleHttpError));
  }
}
