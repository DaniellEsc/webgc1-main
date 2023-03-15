import { Component, OnInit } from '@angular/core';
import { Icontacto } from 'src/app/data/interfaces/models/icontacto';
import { Router, ActivatedRoute } from '@angular/router';
import { Alert } from 'src/app/data/classes/alert';
import { EmpresaService } from '../../services/empresa.service';
import { ContactosService } from '../../services/contactos/contactos.service';

@Component({
  selector: 'app-formscontacto',
  templateUrl: './formscontacto.component.html',
  styleUrls: ['./formscontacto.component.css']
})
export class FormscontactoComponent implements OnInit {

  public postContacto: Icontacto | any = {};
  public contacto_id: number = 0;
  public empresa_id: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private empresaService: EmpresaService,
    private contactosService: ContactosService

  ) {
    this.contacto_id = this.route.snapshot.params['id'];
  }





  ngOnInit(): void {
    this.empresa_id = this.empresaService.getId();
    if (this.contacto_id) {
      this.contactosService.getSummaryByContactoId(this.contacto_id).subscribe(
        r => {
          this.postContacto = r;
        }
      )
    }
    console.log(this.empresa_id);
  }


  registrarContacto() {
    if (this.contacto_id) {
      this.contactosService.edit(this.contacto_id, this.postContacto).subscribe(r => {
        let alert = new Alert(r.error, r.icon, r.message, this.router);
        alert.response('/panel/empresa/contactosEmpresariales/empresa/' + this.empresa_id);

      })
    } else {
      this.postContacto.empresa_id=this.empresa_id;
      this.contactosService.save(this.postContacto).subscribe(r => {
        let alert = new Alert(r.error, r.icon, r.message, this.router);
        alert.response('/panel/empresa/contactosEmpresariales/empresa/' + this.empresa_id);
        console.log(this.empresa_id);
      })
    }
  }












}
