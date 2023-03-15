import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Areasestudio } from 'src/app/data/interfaces/models/areasestudio';
import { catchError, map, Observable, of } from 'rxjs';

const AREAS_API= 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/AreasEstudio';
@Injectable({
  providedIn: 'root'
})
export class AreasestudioService {

  constructor(private http: HttpClient) { }


  gerAreas(): Observable<Areasestudio[]>{
    return this.http.get<Areasestudio[]>(AREAS_API);
  }


  save(capacitacion:Areasestudio): Observable<any> {
    const response = { error: true, message: '', icon: '', data: null }
    return this.http.post<any>(AREAS_API, capacitacion)
    .pipe(
      map(r => {
        response.error = false;
        response.message = 'Area de Estudio Registrado';
        response.icon = 'success';
        response.data = r;
        return response;
      }),
      catchError(e => {
        response.message = e.error.message;
        response.message = 'campos vacios';
        response.icon = 'error';
        return of(response);
      })
    );
  }


  edit(id: number, area:Areasestudio): Observable<any> {
    const response = { error: true, message: '', icon: '', data: null }
    return this.http.put<any>(`${AREAS_API}/${id}`, area)
    .pipe(
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
        response.message = 'campos vacios';
        return of(response);
      })
    );
  }

  Actualizar(area:Areasestudio):Observable<any>{
    return this.http.put<any>(`${AREAS_API}/${area.id}`,area)
  
  }



  getSummaryById(area_id:number):Observable<any>{
    return this.http.get<any>(`${AREAS_API}/${area_id}`);
  }


  deleteAreasEstudio(id:number): Observable<any>{
    return this.http.delete<any>(`${AREAS_API}/${id}`);
  }
  getTabla(id:any):Observable<any>{
    return this.http.get(`${AREAS_API}/${id}`)
  }

}
