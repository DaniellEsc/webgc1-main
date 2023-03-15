import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { ILogro } from 'src/app/data/interfaces/models/ilogro';

const LOGRO_API = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/logro';
@Injectable({
  providedIn: 'root'
})
export class LogroService {

  constructor(private http: HttpClient) { }


  getLogroByEstudianteId(estudiante_id: number): Observable<any> {
    return this.http.get<any>(`${LOGRO_API}/estudiante/${estudiante_id}`);
  }

  deleteLogro(id: number): Observable<any> {
    return this.http.delete<any>(`${LOGRO_API}/${id}`);
  }

  save(logro: ILogro): Observable<any> {
    const response = { error: true, message: '', icon: '', data: null };
    return this.http.post<any>(LOGRO_API, logro).pipe(
      map(r => {
        response.error = false;
        response.message = 'Logro Registrado',
          response.icon = 'success';
        response.data = r;
        return response;
      }),
      catchError(e => {
        response.message = e.error.message;
        response.icon = 'error';
        return of(response)
      })
    )
  }

  edit(id:number,logro: ILogro): Observable<any> {
    const response = { error: true, message: '', icon: '', data: null };
    return this.http.put<any>(`${LOGRO_API}/${id}`, logro).pipe(
      map(r => {
        response.error = false;
        response.message = 'Datos Actualizados',
          response.icon = 'success';
        response.data = r;
        return response;
      }),
      catchError(e => {
        response.message = e.error.message;
        response.icon = 'error';
        return of(response)
      })
    )
  }

  getSummaryByLogroId(logro_id:number):Observable<any>{
    return this.http.get<any>(`${LOGRO_API}/resumen/${logro_id}`);
  }
}
