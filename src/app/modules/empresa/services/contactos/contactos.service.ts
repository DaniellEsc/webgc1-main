import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Icontacto } from 'src/app/data/interfaces/models/icontacto';
const CONTACTOS_API  = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/contactosEmpresa';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(private http: HttpClient) { }

getcontactosByEmpresaId(id: number): Observable<any>{
  return this.http.get(`${CONTACTOS_API}/empresa/${id}`);
}

getSummaryByContactoId(contacto_id: number): Observable<any>{
  return this.http.get<any>(`${CONTACTOS_API}/resumen/${contacto_id}`);
}




save(contacto: Icontacto){
  const response = { error: true, message: '', icon: '', data: null }
  return this.http.post<any>(CONTACTOS_API, contacto)
  .pipe(
    map(r => {
      response.error = false;
      response.message = 'Oferta registrada con exito';
      response.icon = 'success';
      response.data = r;
      return response;
    }),
    catchError(e => {
      response.message = e.error.message;
      response.icon = 'error';
      return of(response);
    })
  );


}



edit(id: number, contacto: Icontacto): Observable<any> {
  const response = { error: true, message: '', icon: '', data: null }
  return this.http.put<any>(`${CONTACTOS_API}/${id}`, contacto).pipe(
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
  );
}

deleteContacto(id:number): Observable<any>{
  return this.http.delete<any>(`${CONTACTOS_API}/${id}`);
}

}
