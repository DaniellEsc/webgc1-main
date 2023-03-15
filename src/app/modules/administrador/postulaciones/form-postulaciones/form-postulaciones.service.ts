import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Postulaciones, PostulacionesPut} from "./form-postulaciones";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormPostulacionesService {

  private URL = "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com";

  httpHeaders = new HttpHeaders().append('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {
  }

  getPostulaciones(id: number): Observable<Postulaciones> {
    return this.httpClient.get<Postulaciones>(this.URL + '/postulaciones/' + id);
  }

  putPostulaciones(postulaciones: PostulacionesPut,  id: number){
    return this.httpClient.put<PostulacionesPut>(this.URL + '/postulaciones/' + id, postulaciones);
  }


}
