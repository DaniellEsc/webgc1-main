import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/data/classes/alert';
import { ILogro } from 'src/app/data/interfaces/models/ilogro';
import { EstudianteService } from '../../services/estudiante.service';
import { LogroService } from '../../services/logros/logro.service';

@Component({
  selector: 'app-form-logro',
  templateUrl: './form-logro.component.html',
  styleUrls: ['./form-logro.component.css']
})
export class FormLogroComponent implements OnInit {

  public tiposLogro: string[] = ["Deportivo", "Académico", "Artístico", "Profesional"];
  public logro: ILogro | any = {};
  public logro_id: number;
  public estudiante_id = 0;


  constructor(private estudianteService: EstudianteService,
    private route: ActivatedRoute,
    private logroService: LogroService,
    private router: Router) {
    this.logro_id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.estudiante_id = this.estudianteService.getId();
    this.logro.cedula = this.estudianteService.getCedula();
    if (this.logro_id) {
      this.logroService.getSummaryByLogroId(this.logro_id).subscribe(r => {
        this.logro = r;
      })
    }
  }

  registrarLogro() {
    if (this.logro_id) {
      //actualizar
      this.logroService.edit(this.logro_id, this.logro).subscribe(r => {
        let alert = new Alert(r.error, r.icon, r.message, this.router);
        alert.response('/panel/estudiante/logros/estudiante/' + this.estudiante_id);
      })
    } else {
      this.logroService.save(this.logro).subscribe(r => {

        let alert = new Alert(r.error, r.icon, r.message, this.router);
        alert.response('/panel/estudiante/logros/estudiante/' + this.estudiante_id);
      })
    }
  }

}
