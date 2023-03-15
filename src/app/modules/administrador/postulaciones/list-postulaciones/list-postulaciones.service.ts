import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Estudiante, Postulaciones} from "./list-postulaciones";

@Injectable({
  providedIn: 'root'
})
export class ListPostulacionesService {

  private URL = "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com";

  httpHeaders = new HttpHeaders().append('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {
  }

  getPostulaciones(): Observable<Postulaciones[]> {
    return this.httpClient.get<Postulaciones[]>(this.URL + '/postulaciones');
  }

  getEstudianteByCedula(cedula: string) {
    return this.httpClient.get<Estudiante> (this.URL + '/estudiantes/cedula/'+cedula);
  }
}
