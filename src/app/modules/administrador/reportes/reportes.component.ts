import { Component, OnInit } from '@angular/core';
import { ReportesService } from "./reportes.service";
import { DataCard } from "../../../data/interfaces/ui/card-data";

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  numeroEmpresas: number = 0;
  numeroEmpleados: number = 0;
  numeroUsuarios: number = 0;
  ofertasLaborales: number = 0;
  numeroPostulaciones: number = 0;
  public datos: DataCard[] = [
    {
      total: 0,
      tag: 'Número de Estudiantes',
      background: '#ADD569',
      link: '/panel/administrador/hojas-vida'
    },
    {
      total: 0,
      tag: 'Número de Empresas',
      background: '#69D56A',
      link: '/panel/administrador/perfil-empresarial'
    },
    {
      total: 0,
      tag: 'Número de Usuarios',
      background: '#69D595',
      link: '/panel/administrador/usuario-list'
    },
    {
      total: 0,
      tag: 'Número de Ofertas Publicadas',
      background: '#69D5BC',
      link: '/panel/administrador/ofertas-laborales'
    },
    {
      total: 0,
      tag: 'Número de Postulaciones',
      background: '#69C1D5',
      link: '/panel/administrador/postulaciones'
    }
  ];
  constructor(private reportes: ReportesService) {
  }

  ngOnInit(): void {
    this.getEstudiantes();
    this.getEmpresas();
    this.getUsuarios();
    this.getOfertasLaborales();
    this.getPostulaciones();

  }

  getEstudiantes() {
    this.reportes.getEstudiantes().subscribe(
      x => {
        this.numeroEmpleados = x.length;
        this.datos[0].total = x.length;
      }
    );
  }

  getEmpresas() {
    this.reportes.getEmpresas().subscribe(
      x => {
        this.numeroEmpresas = x.length;
        this.datos[1].total = x.length;
      }
    );
  }


  private getUsuarios() {
    this.reportes.getUsuarios().subscribe(
      x => {
        this.numeroUsuarios = x.length;
        this.datos[2].total = x.length;
      }
    )
  }

  private getOfertasLaborales() {
    this.reportes.getOfertasLaborales().subscribe(
      x => {
        this.ofertasLaborales = x.length;
        this.datos[3].total = x.length;
      }
    )
  }

  private getPostulaciones() {
    this.reportes.getPostulaciones().subscribe(
      x => {
        this.numeroPostulaciones = x.length;
        this.datos[4].total = x.length;
      }
    )
  }
}
