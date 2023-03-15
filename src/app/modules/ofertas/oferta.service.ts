import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postulacion } from 'src/app/data/interfaces/models/postulacion';
import { catchError, map, Observable, of } from 'rxjs';

const OFERTAS_API = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/ofertas';
const POSTULACION_API = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/postulaciones';
@Injectable({
  providedIn: 'root'
})
export class OfertaService {
  private urlAllServices: string= "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(OFERTAS_API);
  }



  getOfertasById(id: number): Observable<any> {
    return this.http.get(`${OFERTAS_API}/resumen/${id}`);
  }

  getTotal():Observable<{total:number}> {
    return this.http.get<{total:number}>(`${OFERTAS_API}/total`);
  }






getByID(id: number): Observable<any> {
  return this.http.get<any>(`${OFERTAS_API}/${id}`);
}






//para guardar una psotulacion//

save(postulacion: Postulacion): Observable<any> {
  const response = { error: true, message: '', icon: '', data: null }
  return this.http.post<any>(POSTULACION_API, postulacion)
  .pipe(
    map(r => {
      response.error = false;
      response.message = 'Postulacion Realizada con exito';
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



}
