import { Component, OnInit } from '@angular/core';
import { Alert } from 'src/app/data/classes/alert';
import { PAISES } from 'src/app/data/constants/ui/paises-options';
import { IProvincia } from 'src/app/data/interfaces/models/iprovinica';
import Swal from 'sweetalert2';
import { ProvinciaService } from './services/provincia.service';

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css']
})
export class ProvinciaComponent implements OnInit {

  public provincia: IProvincia = {
    id: null,
    nombre: '',
    pais: ''
  }

  public provincias: IProvincia[] = [];

  public paises = PAISES;
  filterPost: string = "";

  constructor(private provinciaService: ProvinciaService) { }

  ngOnInit(): void {
    this.getAllProvincias();
  }

  getAllProvincias() {
    this.provinciaService.getAll().subscribe(d => {
      this.provincias = d;
    })
  }

  registrar() {

    if (this.provincia.id) {
      this.provinciaService.edit(this.provincia.id, this.provincia).subscribe(d => {
        let alert = new Alert(d.error, d.icon, d.message);
        alert.onlyShowAlert();
        if (!d.error) {
          this.getAllProvincias();
        }
      })
    } else {
      this.provinciaService.save(this.provincia).subscribe(d => {
        let alert = new Alert(d.error, d.icon, d.message);
        alert.onlyShowAlert();
        if (!d.error) {
          this.getAllProvincias();
        }
      })
    }
    this.cleanForm();

  }

  loadInfoToForm(provincia: IProvincia) {
    this.provincia = {
      ...provincia
    };
  }

  cleanForm() {
    this.provincia.id = null;
    this.provincia.nombre = '';
    this.provincia.pais = '';
  }

  deleteProvincia(id: number) {
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
        this.provinciaService.delete(id).subscribe(() => {
          Swal.fire('Registro Eliminado', '', 'info');
          this.getAllProvincias();
        });

      }
    })
  }

}
