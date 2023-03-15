import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {OfertaLaboral, OfertasClase} from "./list-ofertas-laborales";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  private urlEndPoint: string = "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com";

  headers = new HttpHeaders().append('Content-Type', 'application/json')

  constructor(private _http:HttpClient) { }

  gerOfertas(): Observable<OfertaLaboral[]>{
    return this._http.get<OfertaLaboral[]>(this.urlEndPoint+"/ofertas");
  }

  /*
  obtenerOfertas(): Promise<any>{
    return this._http.get<any>('http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/ofertas').toPromise();
  }

  getOferta(id : number){
    return this._http.get<OfertasClase>(this.urlEndPoint+"/"+id);
  }*/
}
