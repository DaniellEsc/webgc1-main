import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iusuario } from 'src/app/data/interfaces/models/iusuario';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { UsuarioService } from 'src/app/modules/auth/services/usuario.service';
import { PassRoleService } from 'src/app/modules/auth/services/pass-role.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  public usuario: Iusuario | any = {};
  private usuario_id: number = 0;
  public rolReceived: string = '';
  constructor(private authService: AuthService,
    private usuarioService: UsuarioService,
    private router: Router,
    private passRoleService: PassRoleService) { }

  ngOnInit(): void {
    this.usuario_id = this.authService.getUser().usuario_id;
    this.usuarioService.getResumenByUsuarioId(this.usuario_id).subscribe(d => {
      this.usuario = d;
      this.usuario.password = ''
    })
    this.rolReceived = this.passRoleService.getRol();
  }

  registrarUsuario() {
    console.log('🧵 Usuario Actualizado', this.usuario);
    this.usuarioService.edit(this.usuario_id, this.usuario).subscribe(d => {

      console.log('🎠Role', d.data?.rol?.nombre);
      Swal.fire({
        icon: d.icon,
        text: d.message
      });

      if (!d.error) {
        this.authService.logout();
      }

    })
  }

  eliminarUsuario(id: number) {
    Swal.fire({
      title: '¿Estas seguro de eliminar tu cuenta?',
      text: "No podrás reveritr los cambios",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.deleteUsuario(id).subscribe(() => {
          Swal.fire('Registro Eliminado', '', 'info');
          this.authService.logout();
        });
      }
    })
  }

  redirect(role: string) {
    switch (role) {
      case 'ROLE_ESTUDIANTE':
        return '/panel/estudiante';
      case 'ROLE_EMPRESA':
        return '/panel/empresa';
      case 'ROLE_ADMINISTRADOR':
        return '/panel/administrador';
    }
    return '';
  }

  cancel() {
    this.rolReceived = this.authService.getUser().authorities[0].authority;
    this.router.navigateByUrl(this.redirect(this.rolReceived));

  }

}
