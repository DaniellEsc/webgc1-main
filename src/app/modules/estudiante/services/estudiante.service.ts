import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { IEstudiante } from 'src/app/data/interfaces/models/iestudiante';

const ESTUDIANTE_API = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/estudiantes';
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private estudiante_id: number = 0;
  private cedula: string = '';

  constructor(private http: HttpClient) { }

  setId(estudiante_id: number) {
    this.estudiante_id = estudiante_id;
  }

  getId() {
    return this.estudiante_id;
  }

  setCedula(cedula: string) {
    this.cedula = cedula;
  }

  getCedula() {
    return this.cedula;
  }


  getEstudianteByUserId(usuario_id: number): Observable<any> {
    return this.http.get<any>(`${ESTUDIANTE_API}/usuario/${usuario_id}`);
  }

  /*   save(estudiante: IEstudiante): Observable<any> {
      return this.http.post<any>(ESTUDIANTE_API, estudiante);
    } */
  save(estudiante: IEstudiante): Observable<any> {
    const response = { error: true, message: '', icon: '', data: null }
    return this.http.post<any>(ESTUDIANTE_API, estudiante).pipe(
      map(r => {
        response.error = false;
        response.message = 'Estudiante Registrado';
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

  edit(id: number, estudiante: IEstudiante): Observable<any> {
    const response = { error: true, message: '', icon: '', data: null }
    return this.http.put<any>(`${ESTUDIANTE_API}/${id}`, estudiante).pipe(
      map(r => {
        response.error = false;
        response.message = 'Datos Actualizados';
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

  getEstudianteById(id: number): Observable<any> {
    return this.http.get<any>(`${ESTUDIANTE_API}/${id}`);
  }

  getSummaryByEstudianteId(estudiante_id: number): Observable<any> {
    return this.http.get<any>(`${ESTUDIANTE_API}/resumen/${estudiante_id}`);
  }

  getEstudianteByCedula(cedula:string):Observable<any>{
    return this.http.get<any>(`${ESTUDIANTE_API}/cedula/${cedula}`);
  }

}
