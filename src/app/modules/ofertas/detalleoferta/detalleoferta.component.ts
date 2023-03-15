import { Component, OnInit } from '@angular/core';
import { Postulacion } from 'src/app/data/interfaces/models/postulacion';
import { AuthService } from '../../auth/services/auth.service';
import { EstudianteService } from '../../estudiante/services/estudiante.service';
import { Router, ActivatedRoute } from '@angular/router';
import{OfertaService} from 'src/app/modules/ofertas/oferta.service';
import { Alert } from 'src/app/data/classes/alert';
import * as moment from 'moment';
import { IOferta } from 'src/app/data/interfaces/models/ioferta';

@Component({
  selector: 'app-detalleoferta',
  templateUrl: './detalleoferta.component.html',
  styleUrls: ['./detalleoferta.component.css']
})

export class DetalleofertaComponent implements OnInit {


  public usuario_id: number =0;
  public oferta: IOferta  | any={};
  public estudiante: any =[] ;
 // public savePostulacion:Postulacion | any = {};
  public oferta_id: number =0;
  public cedula: string="";
 public creationDate: string | undefined;
  public savePostulacion: Postulacion = new Postulacion();


  constructor(private estudianteService: EstudianteService,
    private authService: AuthService,
    private ofertasService: OfertaService,
    private router:Router,private route: ActivatedRoute,
    ) {

      this.oferta_id=this.route.snapshot.params['id'];
    }

  ngOnInit(): void {
    this.usuario_id=this.authService.getUser().usuario_id
    this.estudianteService.getEstudianteByUserId(this.usuario_id).subscribe(
      data => {
        console.log(data)
      this.estudiante = data;
      console.log(this.savePostulacion);
      }
    )
    this.creationDate = moment().format("YYYY-MM-DDTHH:mm:ss ");
    console.log(this.creationDate);
    this.getByDetail();

  }



public getByDetail(): void{
if(this.oferta_id){
this.ofertasService.getOfertasById(this.oferta_id).subscribe((p)=> this.oferta= p)
}
}


public create(): void{
this.savePostulacion.ofertalaboral_id= this.oferta.id;
this.savePostulacion.estado="En Revision";
this.savePostulacion.cedula= this.estudiante.cedula;
this.ofertasService.save(this.savePostulacion)
.subscribe(r => {
  let alert = new Alert(r.error, r.icon, r.message, this.router);
  alert.response('/ofertas');
  console.log(this.savePostulacion);
})
console.log(this.savePostulacion);
}


}
