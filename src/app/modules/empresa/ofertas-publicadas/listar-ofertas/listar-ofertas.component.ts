import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmpresa } from 'src/app/data/interfaces/models/iempresa';
import { IOferta } from 'src/app/data/interfaces/models/ioferta';
import Swal from 'sweetalert2';
import { EmpresaService } from '../../services/empresa.service';
import { OfertasLaboralesService } from '../../services/ofertas/ofertas-laborales.service';

@Component({
  selector: 'app-listar-ofertas',
  templateUrl: './listar-ofertas.component.html',
  styleUrls: ['./listar-ofertas.component.css']
})
export class ListarOfertasComponent implements OnInit {
  filterPost: string = "";
public myofertas: IOferta []=[];
public empresa: IEmpresa []=[];
public empresa_id: number = 0;

  constructor(
private empresaService: EmpresaService,
private ofertasLaboralesService:OfertasLaboralesService,
private router:Router,private route: ActivatedRoute,
) {

this.empresa_id=this.route.snapshot.params['id']; 

}
  ngOnInit(): void {

    this.getOfertasByEmpresa();


  }

public getOfertasByEmpresa(): void{
if(this.empresa_id){
  this.ofertasLaboralesService.getpublicadasByEmpresaid(this.empresa_id)
  .subscribe(r=>{
    this.myofertas=r;
  })
this.empresaService.getSummaryByEmpresaId(this.empresa_id)
.subscribe(r=>{
  this.empresaService.setId(r.id);
  this.empresaService.setName(r.nombre);
})

}

}

  deleteOferta(oferta_id: number) {

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
        this.ofertasLaboralesService.deleteCapacitacion(oferta_id).subscribe(() => {
          Swal.fire('Registro Eliminado', '', 'info');
          this.getOfertasByEmpresa();
        });
  
      }
    })
  }











}

