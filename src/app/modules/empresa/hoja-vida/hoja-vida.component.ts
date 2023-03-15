import {Component, OnInit} from '@angular/core';
import {
  Capacitaciones,
  Curriculum,
  Educaciones, Logro,
  PerfilOcupacional,
  Preferenciasempleo, ReferenciaPersonal, ReferenciaProfesional
} from "./hoja-vida";
import {HojaVidaService} from "../../estudiante/hoja-vida/hoja-vida.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-hoja-vida',
  templateUrl: './hoja-vida.component.html',
  styleUrls: ['./hoja-vida.component.css']
})
export class HojaVidaComponent implements OnInit {

  public estudiante_id: number = 0;

  public curriculum: Curriculum = new Curriculum();
  public preferenciasempleo: Preferenciasempleo[] = [];
  public perfilOcupacional: PerfilOcupacional = new PerfilOcupacional();
  public educacion: Educaciones[] = [];
  public capacitaciones: Capacitaciones[] = [];
  public logro: Logro[] = [];
  public referenciaProfesional: ReferenciaProfesional[] = [];
  public referenciaPersonal: ReferenciaPersonal[] = [];

  constructor( private hojaVidaService: HojaVidaService,private activatedRoute: ActivatedRoute,) {

  }


  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.estudiante_id = params['id'];
    });

    this.getEstudiante();
    this.getPreferenciaEmpleo();
    this.getPerfilOcupacional();
    this.getEducacion();
    this.getCapacitaciones();
    this.getLogros();
    this.getReferenciaProfesionales();
    this.getReferenciaPersonal();

  }

  private getEstudiante() {
    this.hojaVidaService.getEstudiante(this.estudiante_id).subscribe(
      e => this.curriculum = e
    );
  }

  private getPreferenciaEmpleo() {
    this.hojaVidaService.getPreferenciaEmpleo(this.estudiante_id).subscribe(
      e => this.preferenciasempleo = e
    );

  }

  private getPerfilOcupacional() {
    this.hojaVidaService.getPerfilOcupacional(this.estudiante_id).subscribe(
      e => this.perfilOcupacional = e
    );
  }

  private getEducacion() {
    this.hojaVidaService.getEducacion(this.estudiante_id).subscribe(
      e => this.educacion = e
    );
  }

  private getCapacitaciones() {
    this.hojaVidaService.getCapacitaciones(this.estudiante_id).subscribe(
      e => this.capacitaciones = e
    );
  }

  private getLogros() {
    this.hojaVidaService.getLogros(this.estudiante_id).subscribe(
      e => this.logro = e
    );
  }

  private getReferenciaProfesionales() {
    this.hojaVidaService.getReferenciaProfesionales(this.estudiante_id).subscribe(
      e => this.referenciaProfesional = e
    );
  }

  private getReferenciaPersonal() {
    this.hojaVidaService.getReferenciaPersonal(this.estudiante_id).subscribe(
      e => this.referenciaPersonal = e
    );
  }

}
