import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICiudad } from '../../interfaces/models/iciudad';

const CIUDAD_API = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/ciudades';
@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ICiudad[]> {
    return this.http.get<ICiudad[]>(CIUDAD_API);
  }
}
