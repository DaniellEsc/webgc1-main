import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Capacitacion} from 'src/app/data/interfaces/models/capacitacion';
import { catchError, map, Observable, of } from 'rxjs';

const CAPACITACION_API = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/capacitacion';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionesService {

  private url:string= 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/capacitacion';

 


  constructor(private http: HttpClient) { }


    
  getCapacitacionByEstudianteId(estudiante_id: number): Observable<any> {
    return this.http.get<any>(`${CAPACITACION_API}/estudiante/${estudiante_id}`);
  }


 /* createByEstudiante(capacitacion:Capacitacion): Observable<Capacitacion>{
  return this.http.post<Capacitacion>(`${CAPACITACION_API}_`, capacitacion);
  }*/

  deleteCapacitacion(id:number): Observable<any>{
    return this.http.delete<any>(`${CAPACITACION_API}/${id}`);
  }

  
  save(capacitacion:Capacitacion): Observable<any> {
    const response = { error: true, message: '', icon: '', data: null }
    return this.http.post<any>(CAPACITACION_API, capacitacion).pipe(
      map(r => {
        response.error = false;
        response.message = 'Capacitacion Registrado';
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


  edit(id: number, capacitacion:Capacitacion): Observable<any> {
    const response = { error: true, message: '', icon: '', data: null }
    return this.http.put<any>(`${CAPACITACION_API}/${id}`, capacitacion).pipe(
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


//obtener datos de cualquier enlace que lo requiera
  public get(urls: string){
    return this.http.get(urls)
  }



  getSummaryByCapId(capacitacion_id:number):Observable<any>{
    return this.http.get<any>(`${CAPACITACION_API}/${capacitacion_id}`);
  }



}
