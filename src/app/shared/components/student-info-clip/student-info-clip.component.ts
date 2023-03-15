import { Component, Input, OnInit } from '@angular/core';
import { IEstudiante } from 'src/app/data/interfaces/models/iestudiante';
import { IClipInfo } from 'src/app/data/interfaces/ui/clip-info';
import { EstudianteService } from 'src/app/modules/estudiante/services/estudiante.service';

@Component({
  selector: 'app-student-info-clip',
  templateUrl: './student-info-clip.component.html',
  styleUrls: ['./student-info-clip.component.css']
})
export class StudentInfoClipComponent implements OnInit {

  @Input() idEstudiante: number = 0;
  dataEstudiante: IEstudiante | any = {};
  dataUI: IClipInfo[] = [];
  constructor(private estudianteService: EstudianteService) { }

  ngOnInit(): void {

    this.estudianteService.getSummaryByEstudianteId(this.idEstudiante).subscribe(d => {
      this.dataEstudiante = d;

      this.dataUI.push(
        { label: 'Estudiante', content: d.nombres + ' ' + d.apellidos },
        { icon: 'bi bi-postcard', content: d.cedula },
        { icon: 'bi bi-gender-ambiguous', content: this.setGenero(d.genero) },
        { icon: 'bi bi-geo-alt', content: d.ciudad },
      )
    })
  }

  setGenero(genero: string) {
    let genre = '';
    switch (genero) {
      case 'M':
        genre = 'Masculino'
        break;
      case 'F':
        genre = 'Femenino'
        break;
      default:
        genre = 'Otro'
        break;
    }

    return genre;
  }

}
