import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Horse } from '../models/horse';

@Injectable({
  providedIn: 'root'
})
export class HorseService {
  private apiUrl = 'http://localhost:3000/horses';


  constructor(private http: HttpClient) { }

  getAllHorses(): Observable<Horse[]> {
    return this.http.get<Horse[]>(this.apiUrl);
  }
}
