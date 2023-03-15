import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Rol, Usuario} from "./usuario-list";

@Injectable({
  providedIn: 'root'
})
export class UsuarioListService {

  private URL = 'http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com';

  constructor(private httpClient: HttpClient) {
  }

  getUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.URL + '/usuarios');
  }

  putUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    console.log(this.URL + '/usuarios/' + id)
    console.log(usuario)
    return this.httpClient.put<Usuario>(this.URL + '/usuarios/' + id, usuario);
  }

  getRoles(): Observable<Rol[]> {
    return this.httpClient.get<Rol[]>(this.URL + '/roles');
  }
}
