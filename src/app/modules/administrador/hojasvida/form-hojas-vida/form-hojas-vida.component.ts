import {Component, OnInit} from '@angular/core';
import {
  Curriculum,
  Educaciones,
  Preferenciasempleo,
  ReferenciaPersonal,
  ReferenciaProfesional, Usuario
} from "./form-hojas-vida";
import {CurriculumEstudianteService} from "./form-hojas-vida.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-form-hojas-vida',
  templateUrl: './form-hojas-vida.component.html',
  styleUrls: ['./form-hojas-vida.component.css']
})
export class FormHojasVidaComponent implements OnInit {


  public curriculum: Curriculum = new Curriculum();
  public usuario: Usuario = new Usuario();

  public referenciapersonal: ReferenciaPersonal[] = [];
  public referenciaprofesionales: ReferenciaProfesional[] = [];
  public preferenciaempleo: Preferenciasempleo[] = [];
  public educacion: Educaciones[] = [];

  constructor(private curriculumEstudianteService: CurriculumEstudianteService, private router: Router, private activatedRoute: ActivatedRoute,) {
  }


  ngOnInit(): void {
    this.cargarHojaDeVida()
    this.getReferenciaPersonal();
    this.getReferenciaProfesionales();
    this.getPreferenciaEmpleo();
    this.getEducacion();
  }

  cargarHojaDeVida(): void {
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.curriculumEstudianteService.getEstudiante(id).subscribe(
            es => this.curriculum = es
          );
        }
      }
    );
  }


  private getReferenciaPersonal() {
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.curriculumEstudianteService.getReferenciaPersonal(id).subscribe(
            es => this.referenciapersonal = es
          );
        }
      }
    )
  }

  private getReferenciaProfesionales() {
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.curriculumEstudianteService.getReferenciaProfesionales(id).subscribe(
            es => this.referenciaprofesionales = es
          );
        }
      }
    )
  }

  private getPreferenciaEmpleo() {
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.curriculumEstudianteService.getPreferenciaEmpleo(id).subscribe(
            es => this.preferenciaempleo = es
          );
        }
      }
    )
  }

  private getEducacion() {
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.curriculumEstudianteService.getEducacion(id).subscribe(
            es => this.educacion = es
          );
        }
      }
    )
  }


  public updateUsuario(usuario: Usuario, id: number): void {
    usuario.username = this.curriculum.usuario.username;
    usuario.password = "1234";
    // this.usuario.password= this.curriculum.usuario.password;
    usuario.email = this.curriculum.usuario.email;
    usuario.telefono = this.curriculum.usuario.telefono;
    usuario.rol = "ROLE_ESTUDIANTE";

    if (usuario.estado == true) {
      usuario.estado = false;
    } else {
      usuario.estado = true;
    }
    console.log(usuario);

    this.curriculumEstudianteService.updateUsuario(usuario, id).subscribe(
      response => {
        Swal.fire('Estado Actualizado', `Usuario ${this.usuario.username} actualizado con éxito`, 'success');

        this.router.navigate(['/panel/administrador/hojas-vida'])
      }
    )
  }
}
