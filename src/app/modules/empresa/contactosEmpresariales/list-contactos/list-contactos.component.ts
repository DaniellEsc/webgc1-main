import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../../services/contactos/contactos.service';
import { EmpresaService } from '../../services/empresa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Icontacto } from 'src/app/data/interfaces/models/icontacto';
import { IEmpresa } from 'src/app/data/interfaces/models/iempresa';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-contactos',
  templateUrl: './list-contactos.component.html',
  styleUrls: ['./list-contactos.component.css']
})
export class ListContactosComponent implements OnInit {

public mycontactos: Icontacto []=[];
public empresa: IEmpresa []=[];
public contacto_id:number=0;
public empresa_id:number=0;

  constructor(
    private empresaService: EmpresaService,
    private contactosService: ContactosService,
    private router:Router,private route: ActivatedRoute,
  ) { 
this.empresa_id=this.route.snapshot.params['id']; 
  }

  ngOnInit(): void {
    this. getOfertasByEmpresa();
  }


  public getOfertasByEmpresa(): void{
    if(this.empresa_id){
      this.contactosService.getcontactosByEmpresaId(this.empresa_id)
      .subscribe(r=>{
        this.mycontactos=r;
      })
    this.empresaService.getSummaryByEmpresaId(this.empresa_id)
    .subscribe(r=>{
      this.empresaService.setId(r.id);
    })
    
    }
    
    }



    //------///
    deleteOferta(contacto_id: number) {

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
          this.contactosService.deleteContacto(contacto_id).subscribe(() => {
            Swal.fire('Registro Eliminado', '', 'info');
            this.getOfertasByEmpresa();
          });
    
        }
      })
    }





}
