import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlatformHttpService {

  constructor(private httpClient: HttpClient) { }

  Get<T>(resource: string): Observable<T>{
    return this.httpClient.get(resource).pipe(catchError((error) => throwError(error))) as unknown as Observable<T>;
  }
}
