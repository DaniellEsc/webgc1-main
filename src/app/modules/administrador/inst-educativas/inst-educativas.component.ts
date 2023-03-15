import { Component, OnInit } from '@angular/core';
import {Alert} from "../../../data/classes/alert";
import Swal from "sweetalert2";
import {InstitucionesEduService} from "./service/instituciones-edu.service";
import {Institucion} from "./institucion";

@Component({
  selector: 'app-inst-educativas',
  templateUrl: './inst-educativas.component.html',
  styleUrls: ['./inst-educativas.component.css']
})
export class InstEducativasComponent implements OnInit {

  public institucion: Institucion = {
    id: null,
    nombre: ''
  }

  public instituciones: Institucion[] = [];
  filterPost: string = "";


  constructor(private institucionService: InstitucionesEduService) { }

  ngOnInit(): void {
    this.getInstituciones();
  }

  getInstituciones() {
    this.institucionService.GetInst().subscribe(d => {
      this.instituciones = d;
    })
  }

  registrar() {

    if (this.institucion.id) {
      this.institucionService.Editar(this.institucion.id, this.institucion).subscribe(d => {
        let alert = new Alert(d.error, d.icon, d.message);
        alert.onlyShowAlert();
        if (!d.error) {
          this.getInstituciones();
        }
      })
    } else {
      this.institucionService.Guardar(this.institucion).subscribe(d => {
        let alert = new Alert(d.error, d.icon, d.message);
        alert.onlyShowAlert();
        if (!d.error) {
          this.getInstituciones();
        }
      })
    }
    this.cleanForm();

  }

  loadInfoToForm(institucion: Institucion) {
    this.institucion = {
      ...institucion
    };
  }

  cleanForm() {
    this.institucion.id = null;
    this.institucion.nombre = '';
  }

  EliminarInstitucion(id: number) {
    Swal.fire({
      title: '¿Estas seguro de eliminar esta Institucion?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.institucionService.Eliminar(id).subscribe(() => {
          Swal.fire('Institucion Eliminada', '', 'info');
          this.getInstituciones();
        });

      }
    })
  }

}
