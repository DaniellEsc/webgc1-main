import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { EmpresaRoutingModule } from './empresa-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


import { ListarOfertasComponent } from './ofertas-publicadas/listar-ofertas/listar-ofertas.component';
import { FormOfertasComponent } from './ofertas-publicadas/form-ofertas/form-ofertas.component';



import { FormscontactoComponent } from './contactosEmpresariales/formscontacto/formscontacto.component';
import { ListContactosComponent } from './contactosEmpresariales/list-contactos/list-contactos.component';


import { OfAplicadasComponent } from './of-aplicadas/of-aplicadas.component';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';
import { FiltrolistPipe } from './ofertas-publicadas/pipe/filtrolist.pipe';
import { HojaVidaComponent } from './hoja-vida/hoja-vida.component';





@NgModule({
  declarations: [
    ResumeComponent,


    ListarOfertasComponent,
    FormOfertasComponent,

    EmpresaFormComponent,
      FormscontactoComponent,
      ListContactosComponent,

    ListarOfertasComponent,
    FormOfertasComponent,
    OfAplicadasComponent,
    EmpresaFormComponent,
    FiltrolistPipe,
    HojaVidaComponent


  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    SharedModule
  ]
})
export class EmpresaModule { }
