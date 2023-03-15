import { Component, OnInit } from '@angular/core';
import { Alert } from 'src/app/data/classes/alert';
import { JORNADAS } from 'src/app/data/constants/ui/jornadas';
import { PrefLaboral } from 'src/app/data/interfaces/models/pref-laboral';
import Swal from 'sweetalert2';
import { PrefLaboralService } from '../services/pref-laboral/pref-laboral.service';

@Component({
  selector: 'app-pref-laboral',
  templateUrl: './pref-laboral.component.html',
  styleUrls: ['./pref-laboral.component.css']
})
export class PrefLaboralComponent implements OnInit {

  prefLaboral: PrefLaboral = new PrefLaboral;
  jornadas = JORNADAS;
  cedulaUsuario: any;
  idUsuario: any;
  datosTabPref: any;

  arrayTabla: any[] = [];

  sectordatos: any;
  tiempodatos: any;
  salariodatos: any;

  constructor(private prefLaboralService: PrefLaboralService) { }

  ngOnInit(): void {

    this.cedulaUsuario = localStorage.getItem('cedulaPerfil')
    this.idUsuario = localStorage.getItem('idPerfil')
    this.ObEduTab();


  }

  guardardatos() {
    if (this.sectordatos === undefined) {
      this.Mensaje();
    } else {
      if (this.tiempodatos === undefined) {
        this.Mensaje();
      } else {
        if (this.salariodatos === undefined) {
          this.Mensaje();
        } else {
          if (this.arrayTabla.length == 0) {
            this.prefLaboral.cedula_estudiante = this.cedulaUsuario
            this.prefLaboral.sector_empresarial = this.sectordatos
            this.prefLaboral.tiempo = this.tiempodatos
            this.prefLaboral.salario = this.salariodatos
            this.prefLaboralService.postPreferenciaL(this.prefLaboral).subscribe(data => {
              this.arrayTabla = []
              this.ObEduTab()
              this.Campos()
              Swal.fire({
                icon: 'success',
                text: 'Datos Guardatos'
              });
            })
          } else {
            Swal.fire("Solo se permite un Registro!")
            this.Campos()
          }
        }
      }
    }
  }


  ObEduTab() {
    this.prefLaboral.cedula_estudiante = this.cedulaUsuario
    this.prefLaboralService.getTabla(this.idUsuario).subscribe(datoTab => {
      this.datosTabPref = datoTab;
      this.arrayTabla = datoTab
      /* for (var datarray in datoTab) {
         if (datoTab[datarray].cedula == this.prefLaboral.cedula_estudiante) {
           this.arrayTabla.push(datoTab[datarray])
         }
       }*/
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
        this.prefLaboralService.Elimir(id).subscribe(result => {
          Swal.fire('Registro Eliminado', '', 'info');
          this.arrayTabla = []
          this.ObEduTab()
        });

      }
    })
  }




  Actualizar(datoEmpresa: any) {
    this.prefLaboral.id = datoEmpresa.id
    this.sectordatos = datoEmpresa.sector_empresarial
    this.tiempodatos = datoEmpresa.tiempo
    this.salariodatos = datoEmpresa.salario

  }

  guardarEdit() {
    this.prefLaboral.sector_empresarial = this.sectordatos
    this.prefLaboral.tiempo = this.tiempodatos
    this.prefLaboral.salario = this.salariodatos
    this.prefLaboralService.ActualizarPref(this.prefLaboral).subscribe(datos => {
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

    this.sectordatos = null
    this.tiempodatos = null
    this.salariodatos = null

  }

  Mensaje() {

    Swal.fire({
      icon: 'error',
      text: 'Llene todos los campos por favor'
    });
  }

}
