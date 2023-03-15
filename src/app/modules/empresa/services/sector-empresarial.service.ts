import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISectorEmpresarial } from 'src/app/data/interfaces/models/isector-empresarial';

const SECTORES_EMPRESARIALES_API = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/sectoresEmpresariales';
@Injectable({
  providedIn: 'root'
})
export class SectorEmpresarialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ISectorEmpresarial[]> {

    return this.http.get<ISectorEmpresarial[]>(SECTORES_EMPRESARIALES_API);
  }
}
