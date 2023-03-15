import { Injectable } from '@angular/core';
import {catchError, map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProvinceGet, VariablesCiudad} from "../ciudad";


const ApiCiudad = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/ciudades';
const ApiProvincia = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/provincias';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  constructor(private http: HttpClient) { }

  getCiudades(): Observable<VariablesCiudad[]> {
    return this.http.get<VariablesCiudad[]>(ApiCiudad);
  }

  GuardarCiudad(ciudad: VariablesCiudad): Observable<any> {
    const response = { error: true, message: '', icon: '', data: null };
    return this.http.post<any>(ApiCiudad, ciudad).pipe(
      map(r => {
        response.error = false;
        response.message = 'Ciudad Registrada';
        response.icon = 'success';
        response.data = r;
        return response;
      }),
      catchError(e => {
        response.message = e.error.message;
        response.icon = 'error';
        return of(response);
      })
    )
  }

  EditarCiudad(id: number, ciudad: VariablesCiudad): Observable<any> {
    const response = { error: true, message: '', icon: '', data: null };
    return this.http.put<any>(`${ApiCiudad}/${id}`, ciudad).pipe(
      map(r => {
        response.error = false;
        response.message = 'Registro Actualizado';
        response.icon = 'success';
        response.data = r;
        return response;
      }),
      catchError(e => {
        response.message = e.error.message;
        response.icon = 'error';
        return of(response);
      })
    )
  }

  EliminarCiudad(id: number): Observable<any> {
    return this.http.delete(`${ApiCiudad}/${id}`);
  }

  getProvincia(): Observable<ProvinceGet[]> {
    return this.http.get<ProvinceGet[]>(ApiProvincia);
  }
}
