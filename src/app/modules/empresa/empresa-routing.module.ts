import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmpresaFormComponent } from "./empresa-form/empresa-form.component";
import { OfAplicadasComponent } from "./of-aplicadas/of-aplicadas.component";
import { ResumeComponent } from "./resume/resume.component";
import {ListarOfertasComponent} from "./ofertas-publicadas/listar-ofertas/listar-ofertas.component";
import {FormOfertasComponent} from "./ofertas-publicadas/form-ofertas/form-ofertas.component"
import { ListContactosComponent } from "./contactosEmpresariales/list-contactos/list-contactos.component";
import { FormscontactoComponent } from "./contactosEmpresariales/formscontacto/formscontacto.component";
import {HojaVidaComponent} from "./hoja-vida/hoja-vida.component";



const routes: Routes = [
  { path: '', component: ResumeComponent },
  {path:'ofertasPublicadas/empresa/:id',component:ListarOfertasComponent},

  {path:'form-ofertas',component:FormOfertasComponent},
  {path:'form-ofertas/:id',component:FormOfertasComponent},
  { path: 'empresa-form', component: EmpresaFormComponent },
  { path: 'empresa-form/:id', component: EmpresaFormComponent },
  {path:'contactosEmpresariales/empresa/:id',component:ListContactosComponent },
  {path:'cotacto-form',component:FormscontactoComponent},
  {path:'cotacto-form/:id',component:FormscontactoComponent},
  { path: 'of-aplicadas', component: OfAplicadasComponent},

  /* {path:'contactosEmpresariales/empresa/:id',component: 🎈🎈Aquí va el nombre del componente } */
  /* {path:'ofertasPublicadas/empresa/:id',component: 🎈🎈Aquí va el nombre del componente } */
   {path:'ofertasAplicadas/empresa/:id',component: OfAplicadasComponent },
  {path:'ofertasAplicadas/empresa/:id/:id',component: HojaVidaComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
