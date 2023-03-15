import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Alert } from 'src/app/data/classes/alert';
import { ICiudad } from 'src/app/data/interfaces/models/iciudad';
import { IOferta } from 'src/app/data/interfaces/models/ioferta';
import { CiudadService } from 'src/app/data/services/api/ciudad.service';
import { EmpresaService } from '../../services/empresa.service';
import { OfertasLaboralesService } from '../../services/ofertas/ofertas-laborales.service';


@Component({
  selector: 'app-form-ofertas',
  templateUrl: './form-ofertas.component.html',
  styleUrls: ['./form-ofertas.component.css']
})
export class FormOfertasComponent implements OnInit {
  public oferta: IOferta| any = {}; 
  public ciudades: ICiudad []=[];
  public empresa?: string;
  public empresa_id = 0;
  public oferta_id = 0;
  public postOferta: IOferta| any = {};


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ofertaService:OfertasLaboralesService,
    private ciudadService: CiudadService,
    private empresaService: EmpresaService
  ) { 
   this.oferta_id= this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.empresa_id= this.empresaService.getId();
    this.postOferta.empresa=this.empresaService.getName();
  
    if(this.oferta_id){

      this.ofertaService.getSummaryByOfertaId(this.oferta_id).subscribe(
        r=>{
          this.postOferta = r;
        }
      )
    }
    this.getCiudades();

  }

//empresa y ciudad viene de una tabla

registrarOferta() { 
  if(this.oferta_id){
this.ofertaService.edit(this.oferta_id, this.postOferta).subscribe(r=>{
  let alert = new Alert(r.error, r.icon, r.message, this.router);
  alert.response('/panel/empresa/ofertasPublicadas/empresa/'+ this.empresa_id);

})
} else{
  this.ofertaService.save(this.postOferta).subscribe( r=>{
    let alert = new Alert(r.error, r.icon, r.message, this.router);
    alert.response('/panel/empresa/ofertasPublicadas/empresa/'+ this.empresa_id);
  })
}
console.log(this.postOferta)
}


getCiudades() {
  this.ciudadService.getAll().subscribe(d => {
    this.ciudades = d;
  })
}










}
