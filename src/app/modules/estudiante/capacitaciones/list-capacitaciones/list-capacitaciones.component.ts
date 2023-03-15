import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Capacitacion} from 'src/app/data/interfaces/models/capacitacion';
import { CapacitacionesService} from 'src/app/modules/estudiante/services/capacitaciones/capacitaciones.service'; 
import { EstudianteService } from '../../services/estudiante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-capacitaciones',
  templateUrl: './list-capacitaciones.component.html',
  styleUrls: ['./list-capacitaciones.component.css']
})
export class ListCapacitacionesComponent implements OnInit {

  public capacitacion: Capacitacion [] = [];
  public estudiante_id: number=0;


  constructor(
    private capacitacionesService: CapacitacionesService,
    private route: ActivatedRoute,
    private estudianteService: EstudianteService ) {
    this.estudiante_id = this.route.snapshot.params['id'];   
     }

  ngOnInit(): void {
   this.getCapacitacionByEstudiante();
}


public getCapacitacionByEstudiante(): void {
  if(this.estudiante_id){
    this.capacitacionesService.getCapacitacionByEstudianteId(this.estudiante_id)
    .subscribe( r=> {
      this.capacitacion =r;
    })
    this.estudianteService.getSummaryByEstudianteId(this.estudiante_id).subscribe(r=> {
      this.estudianteService.setId(r.id);
      this.estudianteService.setCedula(r.cedula);
    })
    console.log(this.capacitacion);
    }
}

deleteCapacitacion(capacitacion_id: number) {

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
      this.capacitacionesService.deleteCapacitacion(capacitacion_id).subscribe(() => {
        Swal.fire('Registro Eliminado', '', 'info');
        this.getCapacitacionByEstudiante();
      });

    }
  })
}


















}
