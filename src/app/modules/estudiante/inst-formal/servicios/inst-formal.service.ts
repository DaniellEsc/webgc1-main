import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { InstFormal } from '../modelos/inst-formal';

@Injectable({
  providedIn: 'root'
})
export class InstFormalService {

  private apiUrl = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com'


  constructor(private http: HttpClient) { }

  getAllNiveles():Observable<any>{
    return this.http.get(`${this.apiUrl}/niveles`)
}

getAllInstitucion():Observable<any>{
  return this.http.get(`${this.apiUrl}/instituciones`)
}

getAllAreaEstudio():Observable<any>{
  return this.http.get(`${this.apiUrl}/AreasEstudio`)
}

posteducacion(educacion:InstFormal):Observable<any>{
  const response = { error: true, message: '', icon: '', data: null }
  return this.http.post<any>(`${this.apiUrl}/educaciones`,educacion)
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

getEduTabla():Observable<any>{
  return this.http.get(`${this.apiUrl}/educaciones`)
}
getAll(id:any):Observable<any>{
  return this.http.get(`${this.apiUrl}/educaciones/${id}`)
}

ElimirEdu(id:any):Observable<any>{
  return this.http.delete(`${this.apiUrl}/educaciones/${id}`)
}

ActualizarEducacion(educacion:InstFormal):Observable<any>{
  return this.http.put<any>(`${this.apiUrl}/educaciones/${educacion.id}`,educacion)

}
}
