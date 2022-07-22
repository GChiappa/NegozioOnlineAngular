import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  private baseUrl: string = 'http://127.0.0.1:8080/NegozioOnline/api';
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Content-Type': 'application/json'
    })
  };

  constructor(private _http: HttpClient) { }

  getArticoli(): Observable<any> {
    return this._http.get(this.baseUrl + '/articoloservice/articoli', this.httpOptions).pipe(
      map((response => response)), catchError(this.errorHandler<any>('Get articoli')));
  }

  // Metodo che gestisce gli errori che possono essere lanciati dal servizio web
  private errorHandler<T>(operation = 'Operazione', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // Stampa errore
      console.log(`${operation} failed: ${error.message}`); // Stampa l'operazione e il messaggio dell'errore
      return of(result as T);
    }
  }
}
