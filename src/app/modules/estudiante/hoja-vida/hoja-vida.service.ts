import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {
  Capacitaciones,
  Curriculum,
  Educaciones,
  Logro, PerfilOcupacional,
  Preferenciasempleo,
  ReferenciaPersonal,
  ReferenciaProfesional
} from "./hoja-vida";

@Injectable({
  providedIn: 'root'
})
export class HojaVidaService {

  private urlEndPoint: string = "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com"

  constructor(private _http: HttpClient) {

  }

  getEstudiante(id: number) {
    console.log(this.urlEndPoint + "/" + id)
    return this._http.get<Curriculum>(this.urlEndPoint + "/estudiantes/" + id);
  }

  getPreferenciaEmpleo(id: number): Observable<Preferenciasempleo[]> {
    return this._http.get<Preferenciasempleo[]>(this.urlEndPoint + "/preferenciasempleo/estudiante/" + id);
  }

  getPerfilOcupacional(id: number) {
    return this._http.get<PerfilOcupacional>(this.urlEndPoint + "/perfiles/estudiante/" + id);
  }

  getEducacion(id: number): Observable<Educaciones[]> {
    return this._http.get<Educaciones[]>(this.urlEndPoint + "/educaciones/estudiante/" + id);
  }

  getCapacitaciones(id: number): Observable<Capacitaciones[]> {
    return this._http.get<Capacitaciones[]>(this.urlEndPoint + "/capacitacion/estudiante/" + id);
  }


  getLogros(id: number): Observable<Logro[]> {
    return this._http.get<Logro[]>(this.urlEndPoint + "/logro/estudiante/" + id);
  }

  getReferenciaProfesionales(id: number): Observable<ReferenciaProfesional[]> {
    return this._http.get<ReferenciaProfesional[]>(this.urlEndPoint + "/referenciaProfesional/estudiante/" + id);
  }

  getReferenciaPersonal(id: number): Observable<ReferenciaPersonal[]> {
    return this._http.get<ReferenciaPersonal[]>(this.urlEndPoint + "/referenciaPersonal/estudiante/" + id);
  }

}

/*
  updateUsuario(usuario: Usuario, id:number){
    console.log(usuario.id)
    return this._http.put<Usuario>(this.urlEndPoint + "/usuarios/" + id, usuario);
  }
 */
