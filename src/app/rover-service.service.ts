import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoverServiceService {
  rover = '';
  num: number = 0;

  m1() {
    ++this.num;
  }

  constructor(private http: HttpClient) {}

  getCuriosity(rover: string): Observable<any> {
    this.rover = rover;
    return this.http.get<any>(
      `ahttps://api.nasa.gov/mars-photos/api/v1/rovers/${this.rover}/photos?sol=1000&api_key=DEMO_KEY`
    );
  }
}
