import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Empresas} from "./list-perfil-empresarial";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  private urlEndPoint: string = "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com";


  headers = new HttpHeaders().append('Content-Type', 'application/json')

  constructor(private _http:HttpClient) {

  }

  getEmpresas(): Observable<Empresas[]>{
    return this._http.get<Empresas[]>(this.urlEndPoint + '/empresas');
  }

  getEmpresasById(id: number): Observable<Empresas[]>{
    return this._http.get<Empresas[]>(this.urlEndPoint + '/empresas/' + id);
  }


}
