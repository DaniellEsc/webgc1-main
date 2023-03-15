import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPostulacion } from 'src/app/data/interfaces/models/ipostulacion';

const POSTULACION_API = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/postulaciones';

@Injectable({
  providedIn: 'root'
})
export class PostulacionService {

  private postulacion_id: number = 0;

  constructor(private http: HttpClient) { }

  setPostulacionId(id: number) {
    this.postulacion_id = id;
  }

  getPostulacionId() {
    return this.postulacion_id;
  }
  getPostulacionesByEstudianteId(estudiante_id: number): Observable<any> {
    return this.http.get<IPostulacion>(`${POSTULACION_API}/estudiante/${estudiante_id}`);
  }

  getPostulacionesByEmpresaId(empresa_id: number): Observable<any[]> {
    return this.http.get<any[]>(`${POSTULACION_API}/empresa/${empresa_id}`);
  }

  getPostulacionById(id: number): Observable<any> {
    return this.http.get<any>(`${POSTULACION_API}/${id}`);
  }

  deletePostulacion(id: number) {
    return this.http.delete(`${POSTULACION_API}/${id}`);
  }
  edit(id:number, postulacion: IPostulacion):Observable<any>{
    return this.http.put(`${POSTULACION_API}/${id}`, postulacion);
  }
}
