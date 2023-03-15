
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOferta } from 'src/app/data/interfaces/models/ioferta';
import { catchError, map, Observable, of } from 'rxjs';



const OFERTAS_API  = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/ofertas';
// Linea no se para que sirve ni de donde viene
@Injectable({
  providedIn: 'root'
})
export class OfertasLaboralesService {


constructor(private http: HttpClient) { }



//trae por id
getpublicadasByEmpresaid(id:number): Observable<any>{
  return this.http.get(`${OFERTAS_API}/empresa/${id}`);
}

getSummaryByOfertaId(estudiante_id: number): Observable<any> {
  return this.http.get<any>(`${OFERTAS_API}/resumen/${estudiante_id}`);
}

//guarda una oferta 
save(oferta:IOferta){
  const response = { error: true, message: '', icon: '', data: null }
  return this.http.post<any>(OFERTAS_API, oferta)
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


edit(id: number, oferta:IOferta): Observable<any> {
  const response = { error: true, message: '', icon: '', data: null }
  return this.http.put<any>(`${OFERTAS_API}/${id}`, oferta).pipe(
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


deleteCapacitacion(id:number): Observable<any>{
  return this.http.delete<any>(`${OFERTAS_API}/${id}`);
}






}
