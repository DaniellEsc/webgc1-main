import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { IEmpresa } from 'src/app/data/interfaces/models/iempresa';

const EMPRESA_API = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private empresa_id: number = 0;
  private nombre_empresa?: string ;

  constructor(private http: HttpClient) { }
  setId(empresa_id: number) {
    this.empresa_id = empresa_id;
  }

  getId() {
    return this.empresa_id;
  }

setName(nombre: string){
this.nombre_empresa=nombre;
}
getName(){
  return this.nombre_empresa;
}




  getEmpresaByUserId(usuario_id: number): Observable<any> {
    return this.http.get<any>(`${EMPRESA_API}/usuario/${usuario_id}`);
  }

  


  getSummaryByEmpresaId(id: number): Observable<any> {
    return this.http.get<any>(`${EMPRESA_API}/resumen/${id}`);
  }

  save(empresa: IEmpresa): Observable<any> {
    const response = { error: true, message: '', icon: '', data: null };
    return this.http.post<any>(EMPRESA_API, empresa).pipe(
      map(r => {
        response.error = false;
        response.message = 'Empresa Registrada';
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

  edit(id: number, empresa: IEmpresa): Observable<any> {
    const response = { error: true, message: '', icon: '', data: null };
    return this.http.put<any>(`${EMPRESA_API}/${id}`, empresa).pipe(
      map(r => {
        response.error = false;
        response.message = 'Datos Actualizados';
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

}
