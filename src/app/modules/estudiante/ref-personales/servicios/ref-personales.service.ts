import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RefPersonales } from '../modelos/ref-personales';
import { Observable, map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefPersonalesService {


  private apiUrl = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com'
  private apiUrl2 = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com'

  constructor(private http: HttpClient) { }


  postRefPer(referencia:RefPersonales):Observable<any>{
    const response = { error: true, message: '', icon: '', data: null }
    return this.http.post<any>(`${this.apiUrl}/referenciaPersonal`,referencia)
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
    return this.http.get(`${this.apiUrl}/referenciaPersonal`)
  }

  ElimirRef(id:any):Observable<any>{
    return this.http.delete(`${this.apiUrl}/referenciaPersonal/${id}`)
  }
  
  ActualizarRef(referencia:RefPersonales):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/referenciaPersonal/${referencia.id}`,referencia)
  }

  getUsuarios():Observable<any>{
    return this.http.get(`${this.apiUrl}/usuarios`)
  }

  
}
