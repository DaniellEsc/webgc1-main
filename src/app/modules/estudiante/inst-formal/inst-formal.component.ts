import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { AreaEstudio, InstFormal, Instituciones, Niveles } from './modelos/inst-formal';
import { InstFormalService } from './servicios/inst-formal.service';

@Component({
  selector: 'app-inst-formal',
  templateUrl: './inst-formal.component.html',
  styleUrls: ['./inst-formal.component.css']
})
export class InstFormalComponent implements OnInit {

  datosPrueba: any;
  datosPrueba2: any;
  datosPrueba3: any;
  datosEduTab: any;

  arrayTabla: any[] = [];
  confirmar: any

  nivelesdatos: any;
  promociondatos: any;
  instituciondatos: any;
  titulodatos: any;
  areaEstudiodatos: any;

  educacion: InstFormal = new InstFormal;
  estudiante_id: number;
  cedulaUsuario: any;

  niveles: Niveles[] = [];
  instituciones: Instituciones[] = [];
  areaEstudio: AreaEstudio[] = [];
  constructor(private serviceInstruccion: InstFormalService,
    private route: ActivatedRoute) {
    this.estudiante_id = this.route.snapshot.params['id'];
  }



  ngOnInit(): void {



    this.cedulaUsuario = localStorage.getItem('cedulaPerfil')
    this.ObEduTab();


    this.serviceInstruccion.getAllNiveles().subscribe(datos => {
      this.datosPrueba = datos;
    })


    this.serviceInstruccion.getAllInstitucion().subscribe(datos => {
      this.datosPrueba2 = datos;
    })

    this.serviceInstruccion.getAllAreaEstudio().subscribe(datos => {
      this.datosPrueba3 = datos;
    })



  }

  guardardatos() {
    if (this.nivelesdatos === undefined) {
      this.Mensaje();
    } else {
      if (this.instituciondatos === undefined) {
        this.Mensaje();
      } else {
        if (this.areaEstudiodatos === undefined) {
          this.Mensaje();
        } else {
          if (this.promociondatos === undefined) {
            this.Mensaje();
          } else {
            if (this.titulodatos === undefined) {
              this.Mensaje();
            } else {
              this.educacion.cedula = this.cedulaUsuario
              this.educacion.nivel = this.nivelesdatos
              this.educacion.institucion_educativa = this.instituciondatos
              this.educacion.anio = parseInt(this.promociondatos)
              this.educacion.titulo = this.titulodatos
              this.educacion.area_estudio = this.areaEstudiodatos
              this.serviceInstruccion.posteducacion(this.educacion).subscribe(data => {
                this.arrayTabla = []
                this.ObEduTab()
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
  }


  ObEduTab() {
    this.educacion.cedula = this.cedulaUsuario
    this.serviceInstruccion.getEduTabla().subscribe(datoTab => {
      this.datosEduTab = datoTab;
      for (var datarray in datoTab) {
        if (datoTab[datarray].cedula == this.educacion.cedula) {
          this.arrayTabla.push(datoTab[datarray])
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
        this.serviceInstruccion.ElimirEdu(id).subscribe(result => {
          Swal.fire('Registro Eliminado', '', 'info');
          this.arrayTabla = []
          this.ObEduTab()
        });

      }
    })
  }




  Actualizar(datoEmpresa: any) {
    this.educacion.id = datoEmpresa.id
    this.nivelesdatos = datoEmpresa.nivel
    this.instituciondatos = datoEmpresa.institucion_educativa
    this.areaEstudiodatos = datoEmpresa.area_estudio
    this.promociondatos = datoEmpresa.anio
    this.titulodatos = datoEmpresa.titulo

  }

  guardarEdit() {
    this.educacion.nivel = this.nivelesdatos
    this.educacion.institucion_educativa = this.instituciondatos
    this.educacion.area_estudio = this.areaEstudiodatos
    this.educacion.anio = this.promociondatos
    this.educacion.titulo = this.titulodatos
    this.serviceInstruccion.ActualizarEducacion(this.educacion).subscribe(datos => {
      console.log(datos)
      this.arrayTabla = []
      this.ObEduTab()

      this.Campos()

      Swal.fire({
        icon: 'success',
        text: 'Datos Actualizados'
      });

    })
  }

  Campos() {

    this.nivelesdatos = "Seleccione una opcion"
    this.instituciondatos = "Seleccione una opcion"
    this.areaEstudiodatos = "Seleccione una opcion"
    this.promociondatos = "Seleccione una opcion"
    this.titulodatos = null
  }

  Mensaje() {
    Swal.fire({
      icon: 'error',
      text: 'Llene todos los campos por favor'
    });
  }

}
