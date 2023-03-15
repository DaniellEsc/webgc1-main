import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { AreasestudioService } from './areasestudio.service';
import { Areasestudio } from 'src/app/data/interfaces/models/areasestudio';
import { Alert } from 'src/app/data/classes/alert';
@Component({
  selector: 'app-area-estudio',
  templateUrl: './area-estudio.component.html',
  styleUrls: ['./area-estudio.component.css']
})
export class AreaEstudioComponent implements OnInit {
  filterPost: string = "";
  public areas: Areasestudio[] = [];
  public postArea: Areasestudio | any = {};
  public area_id: any;
  public objArea: Areasestudio | any = {};
  nombresdatos: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private areaService: AreasestudioService
  ) {
  }

  ngOnInit(): void {

    this.cargarAreasEstudi();
    console.log(this.area_id);
  }


  cargarAreasEstudi() {
    this.areaService.gerAreas().subscribe(r => {
      this.areas = r;
    })
  }


 /* registrarDatos() {
    this.postArea.nombre = this.nombresdatos;
    this.areaService.save(this.postArea).subscribe(r => {
      let alert = new Alert(r.error, r.icon, r.message, this.router);
      alert.response('/panel/administrador/area-estudio');
    })
  }*/

  deleteArea(id: number) {

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
        this.areaService.deleteAreasEstudio(id).subscribe(() => {
          Swal.fire('Registro Eliminado', '', 'info');
          this.cargarAreasEstudi();
        });

      }
    })
  }



  Actualizar(datoArea: any) {
    this.area_id = datoArea.id
    this.nombresdatos = datoArea.nombre
    console.log(this.area_id);
  }

  /*guardarEdit() {
    this.postArea.nombre= this.nombresdatos;
    this.areaService.edit(this.area_id, this.postArea)
      .subscribe(datos => {
        console.log(datos)
        Swal.fire({
          icon: 'success',
          text: 'Datos Actualizados'
        });

      })


  }*/

  registrarArea() { 
    if(this.area_id){
      this.postArea.nombre= this.nombresdatos;
  this.areaService.edit(this.area_id, this.postArea).subscribe(r=>{
    let alert = new Alert(r.error, r.icon, r.message, this.router);
    alert.response('/panel/administrador/area-estudio');
    this.cargarAreasEstudi();
    Swal.fire({
      icon: 'success',
      text: 'Datos Actualizados'
    });
    this.area_id= null;
    this.nombresdatos= '';
    console.log(this.area_id);
  
  })
  } else{
    this.postArea.nombre = this.nombresdatos;
    this.areaService.save(this.postArea).subscribe(r  =>{
      let alert = new Alert(r.error, r.icon, r.message, this.router);
      alert.response('/panel/administrador/area-estudio');
      this.cargarAreasEstudi();
    })
  }






}
}