import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { PrefLaboral } from 'src/app/data/interfaces/models/pref-laboral';

@Injectable({
  providedIn: 'root'
})
export class PrefLaboralService {


  private apiUrl = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com'


  constructor(private http: HttpClient) { }

  postPreferenciaL(prefLaboral:PrefLaboral):Observable<any>{
    const response = { error: true, message: '', icon: '', data: null }
    return this.http.post<any>(`${this.apiUrl}/preferenciasempleo`,prefLaboral)
    .pipe(
      map(r => {
        response.error = false;
        response.message = 'Registrado con exito';
        response.icon = 'success';
        response.data = r;
        return response;
      }),
      catchError(e => {
        response.message = e.error.message;
        response.icon = 'error';
        return of(response);
      })
    );
  }
  
  getTabla(id:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/preferenciasempleo/estudiante/${id}`)
  }
  
  Elimir(id:any):Observable<any>{
    return this.http.delete(`${this.apiUrl}/preferenciasempleo/${id}`)
  }
  
  ActualizarPref(prefLaboral:PrefLaboral):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/preferenciasempleo/${prefLaboral.id}`,prefLaboral)
  
  }

}
