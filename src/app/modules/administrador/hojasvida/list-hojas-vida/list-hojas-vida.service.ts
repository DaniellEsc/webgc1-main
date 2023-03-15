import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Estudiante} from "./list-hojas-vida";

@Injectable({
  providedIn: 'root'
})
export class HojaDeVidaService {

  private URL = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com';

  headers = new HttpHeaders().append('Content-Type', 'application/json')

  constructor(private httpClient:HttpClient) {

  }

  getEstudiante(): Observable<Estudiante[]>{
    return this.httpClient.get<Estudiante[]>(this.URL + '/estudiantes');
  }


}
