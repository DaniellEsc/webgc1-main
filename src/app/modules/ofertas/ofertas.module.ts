import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertasRoutingModule } from './ofertas-routing.module';
import { ListOfertasComponent } from './list-ofertas/list-ofertas.component';
import { SharedModule } from 'src/app/shared/shared.module';


import { OfertasAplicadasComponent } from './ofertas-aplicadas/ofertas-aplicadas.component';

import { DetalleofertaComponent } from './detalleoferta/detalleoferta.component';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule } from '@angular/forms';








@NgModule({
  declarations: [
    ListOfertasComponent,


    OfertasAplicadasComponent,

    DetalleofertaComponent,
    FilterPipe,


    DetalleofertaComponent,
    FilterPipe,

    OfertasAplicadasComponent


  ],
  imports: [
    CommonModule,
    OfertasRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class OfertasModule { }
