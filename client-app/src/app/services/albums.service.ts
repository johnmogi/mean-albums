import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/Album';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  public albumApi = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) { }

  public getAllAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumApi + "albums");
  }


}
