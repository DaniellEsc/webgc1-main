import { Component, OnInit } from '@angular/core';
import { IEstudiante } from 'src/app/data/interfaces/models/iestudiante';
import { IOferta } from 'src/app/data/interfaces/models/ioferta';
import { IPostulacion } from 'src/app/data/interfaces/models/ipostulacion';
import Swal from 'sweetalert2';
import { InstFormal } from '../../estudiante/inst-formal/modelos/inst-formal';
import { InstFormalService } from '../../estudiante/inst-formal/servicios/inst-formal.service';
import { EstudianteService } from '../../estudiante/services/estudiante.service';
import { OfertaService } from '../../ofertas/oferta.service';
import { PostulacionService } from '../../postulaciones/services/postulacion.service';

@Component({
  selector: 'app-of-aplicadas',
  templateUrl: './of-aplicadas.component.html',
  styleUrls: ['./of-aplicadas.component.css']
})
export class OfAplicadasComponent implements OnInit {

  empresaDatos: any;
  idemp: string = '';

  public postulaciones: IPostulacion[] = [];
  public ofertasLaboralesInfo: any []= [];
  public estudiantesPostulados: any [] = [];

  constructor(private ofertaService:OfertaService,
        private postulacionService: PostulacionService,
        private estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.idemp = localStorage.getItem('idEmpresa')!;
    this.getOfertasAplicadasByEmpresa();

  }


  getOfertasAplicadasByEmpresa() {
    this.postulacionService.getPostulacionesByEmpresaId(parseInt(this.idemp)).subscribe(d => {
      this.postulaciones = d;
      for (const postulacion of d) {
        this.ofertaService.getOfertasById(postulacion.ofertalaboral_id).subscribe(r => {
          this.ofertasLaboralesInfo?.push(r);
        });
      }
      for (const postulacion of d) {
        this.estudianteService.getEstudianteByCedula(postulacion.cedula).subscribe(r=>{
          this.estudiantesPostulados?.push(r);
        })
      }
    })
  }



  estadoRevision(i:number){
    this.postulaciones[i].estado = 'En revisión';
    this.postulacionService.edit(this.postulaciones[i].id,this.postulaciones[i]).subscribe(()=>{

    })
  }

  estadoAprobado(i:number){
    this.postulaciones[i].estado = 'Aprobado';
    this.postulacionService.edit(this.postulaciones[i].id,this.postulaciones[i]).subscribe(()=>{

    })
  }

  estadoNoAprobado(i:number){
    this.postulaciones[i].estado = 'No aprobado';
    this.postulacionService.edit(this.postulaciones[i].id,this.postulaciones[i]).subscribe(()=>{
    })
  }

  estadoPostulacionStyle(estado: string): string {

    switch (estado) {

      case 'En revisión':
        return 'text-bg-warning';
      case 'Aprobado':
        return 'text-bg-success';
        case 'No Aprobado':
          return 'text-bg-black';
    }
    return 'text-bg-light';

  }



}
