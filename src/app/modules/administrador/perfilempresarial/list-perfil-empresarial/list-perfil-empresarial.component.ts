import {Component, OnInit} from '@angular/core';
import {Empresas} from "./list-perfil-empresarial";
import {EmpresasService} from "./list-perfil-empresarial.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-list-perfil-empresarial',
  templateUrl: './list-perfil-empresarial.component.html',
  styleUrls: ['./list-perfil-empresarial.component.css']
})
export class ListPerfilEmpresarialComponent implements OnInit {

  public empresas: Empresas[] = [];
  public empresa: Empresas[] = [];



  filterPost: string = '';

  constructor(private _empresaService: EmpresasService) {
  }

  ngOnInit(): void {
    this.getEmpresas();
    //this.getEmpresasById(this.empresas.id);

  }

  getEmpresas(): void {
    this._empresaService.getEmpresas().subscribe(
      empresas => this.empresas = empresas
    )
  }

}
