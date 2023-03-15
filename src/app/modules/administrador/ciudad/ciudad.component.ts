import { Component, OnInit } from '@angular/core';
import {ProvinceGet, VariablesCiudad} from "./ciudad";
import {CiudadService} from "./service/ciudad.service";
import {Alert} from "../../../data/classes/alert";
import Swal from "sweetalert2";

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {

  public ciudad: VariablesCiudad = {
    id: null,
    nombre: '',
    provincia: ''
  }

  public ciudades: VariablesCiudad[] = [];
  public provincias: ProvinceGet[] = [];

  filterCiudad: string = "";

  constructor(private ciudadesService: CiudadService) { }

  ngOnInit(): void {
    this.ciudadesService.getProvincia().subscribe(dados =>{
      this.provincias = dados;
      console.log(dados);
    })
    this.getCiudad();
  }

  getCiudad() {
    this.ciudadesService.getCiudades().subscribe(d => {
      this.ciudades = d;
    })
  }


  registrar() {

    if (this.ciudad.id) {
      this.ciudadesService.EditarCiudad(this.ciudad.id, this.ciudad).subscribe(d => {
        let alert = new Alert(d.error, d.icon, d.message);
        alert.onlyShowAlert();
        if (!d.error) {
          this.getCiudad();
        }
      })
    } else {
      this.ciudadesService.GuardarCiudad(this.ciudad).subscribe(d => {
        let alert = new Alert(d.error, d.icon, d.message);
        alert.onlyShowAlert();
        if (!d.error) {
          this.getCiudad();
        }
      })
    }
    this.cleanForm();

  }

  loadInfoToForm(ciudad: VariablesCiudad) {
    this.ciudad = {
      ...ciudad
    };
  }

  cleanForm() {
    this.ciudad.id = null;
    this.ciudad.nombre = '';
    this.ciudad.provincia = '';
  }

  EliminarCiudades(id: number) {
    Swal.fire({
      title: '¿Estas seguro de eliminar este registro?',
      text: "No podrás reveritr los cambios",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ciudadesService.EliminarCiudad(id).subscribe(() => {
          Swal.fire('Registro Eliminado', '', 'info');
          this.getCiudad();
        });

      }
    })
  }

}
