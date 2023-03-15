import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CapacitacionesService } from 'src/app/modules/estudiante/services/capacitaciones/capacitaciones.service'; 
import {Capacitacion} from 'src/app/data/interfaces/models/capacitacion';
import { EstudianteService} from 'src/app/modules/estudiante/services/estudiante.service';
import { Alert } from 'src/app/data/classes/alert';

@Component({
  selector: 'app-form-capacitacion',
  templateUrl: './form-capacitacion.component.html',
  styleUrls: ['./form-capacitacion.component.css']
})
export class FormCapacitacionComponent implements OnInit {

  areaEstudiodatos:any;
  public niveles: any= [];
  public capacitacion: Capacitacion| any = {};
  public capacitacion_id: number;
  public estudiante_id = 0;
  today = new Date().toLocaleDateString();
  public evento:string[] = ["Conferencia", "Congreso", "Diplomado", "Taller", "Seminario"];
  public tiposdeC:string[] = ["Aprobacion", "Asistencia"];

constructor(
  private router: Router,
  private route: ActivatedRoute,
  private capacitacionesService: CapacitacionesService, 
  private activatedRouter:ActivatedRoute,
  private estudianteService: EstudianteService ) {
  this.capacitacion_id= this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
  this.estudiante_id = this.estudianteService.getId();
  this.capacitacion.cedula= this.estudianteService.getCedula();
  if(this.capacitacion_id){

    this.capacitacionesService.getSummaryByCapId(this.capacitacion_id).subscribe(
      r=>{
        this.capacitacion = r;
      }
    )
  }

  this.getAreasdeestudio();
}



registrarCapacitacion() { 
  if(this.capacitacion_id){
this.capacitacionesService.edit(this.capacitacion_id, this.capacitacion).subscribe(r=>{
  let alert = new Alert(r.error, r.icon, r.message, this.router);
  alert.response('/panel/estudiante/capacitaciones/estudiante/'+ this.estudiante_id);

})
} else{
  this.capacitacionesService.save(this.capacitacion).subscribe( r=>{
    let alert = new Alert(r.error, r.icon, r.message, this.router);
    alert.response('/panel/estudiante/capacitaciones/estudiante/'+ this.estudiante_id);
  })
}

console.log(this.capacitacion )


}



 //traer areas de estudio de la base de datos
  public getAreasdeestudio(){

    this.capacitacionesService.get("http://springgc1-env.eba-mf2fnuvf.us-east-1.elasticbeanstalk.com/AreasEstudio").subscribe(
  
      niveles => {
        this.niveles = niveles;
      }
    )
  }



}