import { Component, OnInit } from '@angular/core';
import { STUDENT_MENU_OPTIONS } from 'src/app/data/constants/ui/student-menu-options';
import { IEstudiante } from 'src/app/data/interfaces/models/iestudiante';
import { DataCard } from 'src/app/data/interfaces/ui/card-data';
import { CardOption } from 'src/app/data/interfaces/ui/card-option';
import { AuthService } from '../../auth/services/auth.service';
import { OfertaService } from '../../ofertas/oferta.service';
import { EstudianteService } from '../services/estudiante.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  public studentOptions: CardOption[] = STUDENT_MENU_OPTIONS;
  public perfilEstudiante: IEstudiante | any;
  public usuario_id = 0;
  public estudiante_id = 0;
  public totalOfertas: DataCard = {
    total:0,
    tag:'Ofertas Encontradas',
    background:'#E29D8E',
    link: '/ofertas'
  };

  public links: { link: string }[] = [
    { link: 'preferenciasLaborales/estudiante/' },
    { link: 'perfilOcupacional/estudiante/' },
    { link: 'instruccionFormal/estudiante/' },
    { link: 'capacitaciones/estudiante/' },
    { link: 'logros/estudiante/' },
    { link: 'referenciasProfesionales/estudiante/' },
    { link: 'referenciasPersonales/estudiante/' }
  ];


  constructor(private authService: AuthService,
    private estudianteService: EstudianteService,
    private ofertaService:OfertaService) { }

  ngOnInit(): void {
    this.usuario_id = this.authService.getUser().usuario_id;

    this.estudianteService.getEstudianteByUserId(this.usuario_id).subscribe(d => {
      this.perfilEstudiante = d;
      localStorage.setItem('cedulaPerfil', d.cedula)
      this.estudiante_id = d.id;
      this.estudianteService.setId(d.id);
      localStorage.setItem('idPerfil', d.id)
      localStorage.setItem('urlimage',d.urlImagen)
      localStorage.setItem('rutaimagen',d.rutaImagen)
      /*       for (const studentOption of this.studentOptions) {
              studentOption.link += this.perfilEstudiante.id;
            } */

      for (let index = 0; index < this.studentOptions.length; index++) {
        this.studentOptions[index].link = this.links[index].link + this.estudiante_id;
      }

    });
    this.ofertaService.getTotal().subscribe(d=>{
      this.totalOfertas.total = d.total;
    })

  }

  showGenre(genero: string): string {

    switch (genero) {
      case 'M':
        return 'Masculino';
      case 'F':
        return 'Femenino';
      case 'Otro':
        return genero;

    }

    return '';

  }

  disableCards() {
    if (!this.perfilEstudiante) {
      return "btn btn-light disabled";
    }
    return '';
  }

}
