import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {Institucion} from "../institucion";

const Instituciones_Api = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/instituciones';

@Injectable({
  providedIn: 'root'
})
export class InstitucionesEduService {

  constructor(private http: HttpClient) { }

  GetInst(): Observable<Institucion[]> {
    return this.http.get<Institucion[]>(Instituciones_Api);
  }

  Guardar(Edu_inst: Institucion): Observable<any> {
    const response = { error: true, message: '', icon: '', data: null };
    return this.http.post<any>(Instituciones_Api, Edu_inst).pipe(
      map(r => {
        response.error = false;
        response.message = 'Registrada';
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

  Editar(id: number, Edu_inst: Institucion): Observable<any> {
    const response = { error: true, message: '', icon: '', data: null };
    return this.http.put<any>(`${Instituciones_Api}/${id}`, Edu_inst).pipe(
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

  Eliminar(id: number): Observable<any> {
    return this.http.delete(`${Instituciones_Api}/${id}`);
  }
}
