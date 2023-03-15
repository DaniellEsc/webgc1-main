import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { RefProfesionales } from 'src/app/data/interfaces/models/ref-profesionales';

@Injectable({
  providedIn: 'root'
})
export class RefProfesionalesService {

  private apiUrl = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com'

  constructor(private http: HttpClient) { }


  postRefPer(referencia:RefProfesionales):Observable<any>{
    const response = { error: true, message: '', icon: '', data: null }
    return this.http.post<any>(`${this.apiUrl}/referenciaProfesional`,referencia)
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

  getTabla():Observable<any>{
    return this.http.get(`${this.apiUrl}/referenciaProfesional`)
  }

  ElimirRef(id:any):Observable<any>{
    return this.http.delete(`${this.apiUrl}/referenciaProfesional/${id}`)
  }
  
  ActualizarRef(referencia:RefProfesionales):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/referenciaProfesional/${referencia.id}`,referencia)
  }

  getUsuarios():Observable<any>{
    return this.http.get(`${this.apiUrl}/usuarios`)
  }
}
