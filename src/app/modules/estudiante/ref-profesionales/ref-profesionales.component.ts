import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RefProfesionales } from 'src/app/data/interfaces/models/ref-profesionales';
import Swal from 'sweetalert2';
import { RefProfesionalesService } from '../services/ref-profesionales/ref-profesionales.service';

@Component({
  selector: 'app-ref-profesionales',
  templateUrl: './ref-profesionales.component.html',
  styleUrls: ['./ref-profesionales.component.css']
})
export class RefProfesionalesComponent implements OnInit {

  arrayTabla: any[] = [];
  datosTab: any;

  cedulaUsuario: any;

  instituciondatos: any;
  nombresdatos: any;
  telefonodatos: any;
  emaildatos: any;
  estudiante_id: number

  refProfesional: RefProfesionales = new RefProfesionales;

  constructor(private serviceRefProfesional: RefProfesionalesService,
    private route: ActivatedRoute,
    private router: Router) {

    this.estudiante_id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {

    this.cedulaUsuario = localStorage.getItem('cedulaPerfil')
    this.ObTabRef();
  }

  guardardatos() {
    if (this.instituciondatos === undefined) {
      this.Mensaje();
    } else {
      if (this.nombresdatos === undefined) {
        this.Mensaje();
      } else {
        if (this.emaildatos === undefined) {
          this.Mensaje();
        } else {
          if (this.telefonodatos === undefined) {
            this.Mensaje();
          } else {

            this.refProfesional.cedula = this.cedulaUsuario
            this.refProfesional.institucion = this.instituciondatos
            this.refProfesional.nombre = this.nombresdatos
            this.refProfesional.telefono = this.telefonodatos
            this.refProfesional.email = this.emaildatos
            console.log(this.refProfesional)
            this.serviceRefProfesional.postRefPer(this.refProfesional).subscribe(dat => {
              this.arrayTabla = []
              this.ObTabRef()
              this.Campos()
              Swal.fire({
                icon: 'success',
                text: 'Datos Guardatos'
              });
            })
          }
        }
      }
    }
  }

  ObTabRef() {
    this.refProfesional.cedula = this.cedulaUsuario
    this.serviceRefProfesional.getTabla().subscribe(datTab => {
      this.datosTab = datTab;
      for (var datarray in datTab) {
        if (datTab[datarray].cedula == this.refProfesional.cedula) {
          this.arrayTabla.push(datTab[datarray])
        }
      }
    })
  }


  EliminarTab(id: any) {

    Swal.fire({
      title: '¿Estas seguro de eliminar este registro?',
      text: "No podrás revertir los cambios",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceRefProfesional.ElimirRef(id).subscribe(result => {
          Swal.fire('Registro Eliminado', '', 'info');
          this.arrayTabla = []
          this.ObTabRef()
        });

      }
    })
  }


  Actualizar(datoRefProf: any) {
    this.refProfesional.id = datoRefProf.id
    this.nombresdatos = datoRefProf.nombre
    this.telefonodatos = datoRefProf.telefono
    this.instituciondatos = datoRefProf.institucion
    this.emaildatos = datoRefProf.email
  }

  guardarEdit() {
    this.refProfesional.institucion = this.instituciondatos
    this.refProfesional.nombre = this.nombresdatos
    this.refProfesional.telefono = this.telefonodatos
    this.refProfesional.email = this.emaildatos
    this.serviceRefProfesional.ActualizarRef(this.refProfesional).subscribe(datos => {
      console.log(datos)
      this.arrayTabla = []
      this.ObTabRef()

      this.Campos()
      Swal.fire({
        icon: 'success',
        text: 'Datos Actualizados'
      });

    })
  }

  Campos() {

    this.nombresdatos = null
    this.telefonodatos = null
    this.instituciondatos = null
    this.emaildatos = null
  }

  Mensaje() {

    Swal.fire({
      icon: 'error',
      text: 'Llene todos los campos por favor'
    });
  }
}
