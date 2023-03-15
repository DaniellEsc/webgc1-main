import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResumeComponent} from './resume/resume.component';
import {ListHojasVidaComponent} from "./hojasvida/list-hojas-vida/list-hojas-vida.component";
import {
  ListOfertasLaboralesComponent
} from "./ofertaslaborales/list-ofertas-laborales/list-ofertas-laborales.component";
import {
  ListPerfilEmpresarialComponent
} from "./perfilempresarial/list-perfil-empresarial/list-perfil-empresarial.component";
import {FormHojasVidaComponent} from "./hojasvida/form-hojas-vida/form-hojas-vida.component";
import {
  FormOfertasLaboralesComponent
} from "./ofertaslaborales/form-ofertas-laborales/form-ofertas-laborales.component";
import {
  FormPerfilEmpresarialComponent
} from "./perfilempresarial/form-perfil-empresarial/form-perfil-empresarial.component";
import {ListPostulacionesComponent} from "./postulaciones/list-postulaciones/list-postulaciones.component";
import {FormPostulacionesComponent} from "./postulaciones/form-postulaciones/form-postulaciones.component";
import {ReportesComponent} from "./reportes/reportes.component";
import {ProvinciaComponent} from "./provincia/provincia.component";
import {AreaEstudioComponent} from "./area-estudio/area-estudio.component";
import {InstEducativasComponent} from "./inst-educativas/inst-educativas.component";

import {UsuarioListComponent} from "./usuario/usuario-list/usuario-list.component";
import {CiudadComponent} from "./ciudad/ciudad.component";

const routes: Routes = [
  {path: '', component: ResumeComponent},
  {path: 'hojas-vida', component: ListHojasVidaComponent},
  {path: 'hojas-vida/:id', component: FormHojasVidaComponent},
  {path: 'ofertas-laborales', component: ListOfertasLaboralesComponent},
  {path: 'ofertas-laborales/:id', component: FormOfertasLaboralesComponent},
  {path: 'perfil-empresarial', component: ListPerfilEmpresarialComponent},
  {path: 'perfil-empresarial/:id', component: FormPerfilEmpresarialComponent},

  {path: 'postulaciones', component: ListPostulacionesComponent},
  {path: 'postulaciones/:id', component: FormPostulacionesComponent},
  {path: 'reportes', component: ReportesComponent},
  {path: 'provincia', component: ProvinciaComponent},
  {path: 'provincia/:id', component: ProvinciaComponent},

  {path: 'ciudad', component: CiudadComponent},
  {path: 'ciudad/:id', component: CiudadComponent},

  {path: 'area-estudio', component: AreaEstudioComponent},
  {path: 'area-estudio/:id', component: AreaEstudioComponent},


  {path: 'istitucion-educativa', component: InstEducativasComponent},
  {path: 'istitucion-educativa/:id', component: InstEducativasComponent},
  {path: 'usuario-list', component: UsuarioListComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdministradorRoutingModule {
}
