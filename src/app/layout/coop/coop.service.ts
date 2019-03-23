import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Coop} from './coop.model';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable()
export class CoopService {

  private urlGet = `${environment._accountSheetApi_url}`;

  constructor(private http: HttpClient) {
  }

  getCoops(): Observable<Coop[]> {
    return this.http.get<Coop[]>(`${this.urlGet}/coops`);
  }

  addCoop(coop: Coop): Observable<Coop> {
    return this.http.post<Coop>(`${this.urlGet}/coops`, coop);
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
