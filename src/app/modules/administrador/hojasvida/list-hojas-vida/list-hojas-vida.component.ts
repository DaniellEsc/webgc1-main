import { Component, OnInit } from '@angular/core';
import {Estudiante} from "./list-hojas-vida";
import {HojaDeVidaService} from "./list-hojas-vida.service";

@Component({
  selector: 'app-list-hojas-vida',
  templateUrl: './list-hojas-vida.component.html',
  styleUrls: ['./list-hojas-vida.component.css']
})
export class ListHojasVidaComponent implements OnInit {

  public estudiante: Estudiante[] = [];

  constructor( private _hojaDeVidaService: HojaDeVidaService) { }

  filterPost: string ="";

  ngOnInit(): void {

    this.getEstudiante();
  }

  getEstudiante(): void {
    this._hojaDeVidaService.getEstudiante().subscribe(
      estudiante => this.estudiante = estudiante
    )
  }






}
