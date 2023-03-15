import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormPostulacionesService} from "./form-postulaciones.service";
import {Postulaciones, PostulacionesPut} from "./form-postulaciones";
import Swal from "sweetalert2";

@Component({
  selector: 'app-form-postulaciones',
  templateUrl: './form-postulaciones.component.html',
  styleUrls: ['./form-postulaciones.component.css']
})
export class FormPostulacionesComponent implements OnInit {

  constructor(private istPostulacionesService: FormPostulacionesService, private router: Router, private activatedRoute: ActivatedRoute,) {
  }

  public postulaciones: Postulaciones = new Postulaciones();


  public postulacionesPut: PostulacionesPut = new PostulacionesPut();

  ngOnInit(): void {
    this.getPostulaciones();
  }

  getPostulaciones(): void {
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.istPostulacionesService.getPostulaciones(id).subscribe(
            postulacion => this.postulaciones = postulacion
          );
        }
      }
    )
  }



  modificarEstado(postulacion: PostulacionesPut, id: number): void {

    postulacion.cedula = this.postulaciones.estudiante.cedula;
    postulacion.ofertalaboral_id = this.postulaciones.ofertaLaboral.id;
    postulacion.fecha = this.postulaciones.fecha;

    postulacion.cedula = this.postulaciones.estudiante.cedula;

    this.istPostulacionesService.putPostulaciones(postulacion, id).subscribe(
      postulacion => {
        Swal.fire('Estado Modificado', `Estado modificado con éxito!`, 'success');
        this.router.navigate(['/panel/administrador/postulaciones'])
      }
    )
  }
}
