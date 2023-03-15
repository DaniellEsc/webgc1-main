import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  private URL = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com';

  constructor(private httpClient:HttpClient) { }

  getEstudiantes(): Observable<any> {
    return this.httpClient.get(this.URL + '/estudiantes').pipe(map(response => response as any));
  }

  getEmpresas(): Observable<any> {
    return this.httpClient.get(this.URL + '/empresas').pipe(map(response => response as any));
  }

  getUsuarios(): Observable<any> {
    return this.httpClient.get(this.URL + '/usuarios').pipe(map(response => response as any));

  }
  getOfertasLaborales(): Observable<any> {
    return this.httpClient.get(this.URL + '/ofertas').pipe(map(response => response as any));

  }
  getPostulaciones(): Observable<any> {
    return this.httpClient.get(this.URL + '/postulaciones').pipe(map(response => response as any));

  }


}
