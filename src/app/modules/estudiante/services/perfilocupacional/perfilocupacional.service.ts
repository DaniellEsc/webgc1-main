import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { Iperfilocupacionales } from 'src/app/data/interfaces/models/iperfilocupacional';

const PERFIL_API ='http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/perfiles';

@Injectable({
  providedIn: 'root'
})
export class PerfilocupacionalService {
private estudiante_id: number = 0;
private cedula: string='';



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


  save(perfil: Iperfilocupacionales): Observable<any> {
    const response = { error: true, message: '', icon: '', data: null }
    return this.http.post<any>(PERFIL_API, perfil).pipe(
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


  edit(id: number, perfil: Iperfilocupacionales): Observable<any> {
    const response = { error: true, message: '', icon: '', data: null }
    return this.http.put<any>(`${PERFIL_API}/${id}`, perfil).pipe(
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


  getSummaryByPerfilId(perfil_id: number): Observable<any> {
    return this.http.get<any>(`${PERFIL_API}/resumen/${perfil_id}`);
  }

getPerfilByEstudianteId(estudiante_id: number): Observable<any>{
return  this.http.get<any>(`${PERFIL_API}/estudiante/${estudiante_id}`);

}



}
