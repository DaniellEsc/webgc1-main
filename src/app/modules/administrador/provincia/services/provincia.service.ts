import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { IProvincia } from 'src/app/data/interfaces/models/iprovinica';

const PROVINCIA_API = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/provincias';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IProvincia[]> {
    return this.http.get<IProvincia[]>(PROVINCIA_API);
  }

  save(provincia: IProvincia): Observable<any> {
    const response = { error: true, message: '', icon: '', data: null };
    return this.http.post<any>(PROVINCIA_API, provincia).pipe(
      map(r => {
        response.error = false;
        response.message = 'Provincia Registrada';
        response.icon = 'success';
        response.data = r;
        return response;
      }),
      catchError(e => {
        response.message = e.error.message;
        response.icon = 'error';
        return of(response);
      })
    )
  }

  edit(id: number, provincia: IProvincia): Observable<any> {
    const response = { error: true, message: '', icon: '', data: null };
    return this.http.put<any>(`${PROVINCIA_API}/${id}`, provincia).pipe(
      map(r => {
        response.error = false;
        response.message = 'Registro Actualizado';
        response.icon = 'success';
        response.data = r;
        return response;
      }),
      catchError(e => {
        response.message = e.error.message;
        response.icon = 'error';
        return of(response);
      })
    )
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${PROVINCIA_API}/${id}`);
  }
}
