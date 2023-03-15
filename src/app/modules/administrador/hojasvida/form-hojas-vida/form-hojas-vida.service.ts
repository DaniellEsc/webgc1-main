import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  Curriculum,
  Educaciones,
  Preferenciasempleo,
  ReferenciaPersonal,
  ReferenciaProfesional, Usuario
} from "./form-hojas-vida";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CurriculumEstudianteService {

  private urlEndPoint: string = "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com"

  constructor(private _http: HttpClient) {

  }

  getEstudiante(id: number) {
    console.log(this.urlEndPoint + "/" + id)
    return this._http.get<Curriculum>(this.urlEndPoint + "/estudiantes/" + id);
  }

  getReferenciaPersonal(id: number): Observable<ReferenciaPersonal[]> {
    return this._http.get<ReferenciaPersonal[]>(this.urlEndPoint + "/referenciaPersonal/estudiante/" + id);
  }

  getReferenciaProfesionales(id: number): Observable<ReferenciaProfesional[]> {
    return this._http.get<ReferenciaProfesional[]>(this.urlEndPoint + "/referenciaProfesional/estudiante/" + id);
  }

  getPreferenciaEmpleo(id: number): Observable<Preferenciasempleo[]> {
    return this._http.get<Preferenciasempleo[]>(this.urlEndPoint + "/preferenciasempleo/estudiante/" + id);
  }

  getEducacion(id: number): Observable<Educaciones[]>{
    return this._http.get<Educaciones[]>(this.urlEndPoint + "/educaciones/estudiante/" + id);
  }

  updateUsuario(usuario: Usuario, id:number){
    console.log(usuario.id)
    return this._http.put<Usuario>(this.urlEndPoint + "/usuarios/" + id, usuario);
  }
}

