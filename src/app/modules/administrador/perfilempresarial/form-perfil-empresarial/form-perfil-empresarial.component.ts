import { Component, OnInit } from '@angular/core';
import {ContactoEmpresa, Empresa, Ofertas, Usuario} from "./form-perfil-empresarial";
import {DatosEmpresaService} from "./form-perfil-empresarial.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-form-perfil-empresarial',
  templateUrl: './form-perfil-empresarial.component.html',
  styleUrls: ['./form-perfil-empresarial.component.css']
})
export class FormPerfilEmpresarialComponent implements OnInit {


  public empresa: Empresa = new Empresa();
  public usuario: Usuario = new Usuario();

  public contactoempresa: ContactoEmpresa[] = [];
  public ofertas: Ofertas[] = [];


  constructor(private _empresaServiceDatos: DatosEmpresaService, private router: Router, private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {

    this.getEmpresas();
    this.getContactoEmpresa();
    this.getOfertas();

  }

  private getEmpresas() {
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this._empresaServiceDatos.getEmpresas(id).subscribe(
            es => this.empresa = es
          );
        }
      }
    );
  }


  private getContactoEmpresa() {
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this._empresaServiceDatos.getContactoEmpresa(id).subscribe(
            es => this.contactoempresa = es
          )
        }
      }
    );
  }

  updateUsuario(usuario: Usuario, id: number) {
    usuario.username = this.empresa.usuario.username;
    usuario.password = "1234";
    usuario.email = this.empresa.usuario.email;
    usuario.telefono = this.empresa.usuario.telefono;
    usuario.rol = "ROLE_EMPRESA";

    if (usuario.estado == true) {
      usuario.estado = false;
    } else {
      usuario.estado = true;
    }
    console.log(usuario);

    this._empresaServiceDatos.updateUsuario(usuario, id).subscribe(
      response => {
        Swal.fire('Estado Actualizado', `Usuario ${this.usuario.username} actualizado con éxito`, 'success');

        this.router.navigate(['/panel/administrador/perfil-empresarial'])
      }
    )
  }

  private getOfertas() {
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this._empresaServiceDatos.getOfertas(id).subscribe(
            es => this.ofertas = es
          )
        }
      }
    );
  }
}
