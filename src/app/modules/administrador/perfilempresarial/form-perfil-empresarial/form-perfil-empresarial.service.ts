import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContactoEmpresa, Empresa, Ofertas, Usuario} from "./form-perfil-empresarial";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DatosEmpresaService {

  private urlEndPoint: string = "http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com";

  constructor(private _http: HttpClient) {

  }

  getEmpresas(id: number) {
    return this._http.get<Empresa>(this.urlEndPoint + "/empresas/" + id);
  }

  getContactoEmpresa(id: number): Observable<ContactoEmpresa[]> {
    return this._http.get<ContactoEmpresa[]>(this.urlEndPoint + "/contactosEmpresa/empresa/" + id);
  }

  updateUsuario(usuario: Usuario, id: number) {
    console.log(usuario.id)
    return this._http.put<Usuario>(this.urlEndPoint + "/usuarios/" + id, usuario);
  }

  getOfertas(id: number): Observable<Ofertas[]> {
    return this._http.get<Ofertas[]>(this.urlEndPoint + "/ofertas/empresa/" + id);
  }
}
