import {Component, OnInit} from '@angular/core';
import {UsuarioListService} from "./usuario-list.service";
import {Rol, Usuario} from "./usuario-list";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  public usuario: Usuario[] = [];
  public rol: Rol[] = []

  filterPost: string = "";

  constructor(private usuarioListService: UsuarioListService, private router: Router) {
  }

  ngOnInit(): void {
    this.getUsuarios();
    this.getRoles();
  }

  private getUsuarios() {
    this.usuarioListService.getUsuarios().subscribe(
      user => {
        this.usuario = user;
      }
    );
  }

  updateUsuario(id: number, usuario: Usuario) {

    usuario.estado = !usuario.estado;
    usuario.password = "";

    this.usuarioListService.putUsuario(id, usuario).subscribe(
      response => {
        Swal.fire('Estado Actualizado', `Usuario ${usuario.username} actualizado con éxito`, 'success');

        this.router.navigate(['/panel/administrador/usuario-list'])
      }
    )
  }

  private getRoles() {
    this.usuarioListService.getRoles().subscribe(
      rol => {
        this.rol = rol;
      }
    )
  }

  updateUsuarioRol(id: number, usuario: Usuario) {

    console.log(usuario.rol);
    usuario.password = "";

    this.usuarioListService.putUsuario(id, usuario).subscribe(
      response => {
        Swal.fire('Rol Actualizado', `Usuario ${usuario.username} actualizado con éxito`, 'success');

        this.router.navigate(['/panel/administrador/usuario-list'])
      }
    )
  }
}
