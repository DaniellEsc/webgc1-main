import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iperfilocupacionales } from 'src/app/data/interfaces/models/iperfilocupacional';
import { EstudianteService } from '../../services/estudiante.service';
import { PerfilocupacionalService } from '../../services/perfilocupacional/perfilocupacional.service';

@Component({
  selector: 'app-miperfilocupacionl',
  templateUrl: './miperfilocupacionl.component.html',
  styleUrls: ['./miperfilocupacionl.component.css']
})
export class MiperfilocupacionlComponent implements OnInit {

  public estudiante_id: number;
  public getperfil: Iperfilocupacionales = {
    id: 0,
    habilidades: '',
    actitudes: '',
    destrezas: '',
    cedula: ''
  };
  
  constructor(

    private  perfilService: PerfilocupacionalService,
    private estudianteService: EstudianteService,
    private route: ActivatedRoute,
    private router: Router
    
  ) { 
    this.estudiante_id =  this.route.snapshot.params['id'];
  }

ngOnInit(): void {

if(this.estudiante_id){
  this.perfilService.getPerfilByEstudianteId(this.estudiante_id)
  .subscribe( r=> {
    this.getperfil =r;
  })
  this.estudianteService.getSummaryByEstudianteId(this.estudiante_id).subscribe(r=> {
  this.estudianteService.setId(r.id);
  this.estudianteService.setCedula(r.cedula);
  })
  console.log(this.getperfil);
  }
}

}
