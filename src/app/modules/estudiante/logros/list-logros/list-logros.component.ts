import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILogro } from 'src/app/data/interfaces/models/ilogro';
import Swal from 'sweetalert2';
import { EstudianteService } from '../../services/estudiante.service';
import { LogroService } from '../../services/logros/logro.service';

@Component({
  selector: 'app-list-logros',
  templateUrl: './list-logros.component.html',
  styleUrls: ['./list-logros.component.css']
})
export class ListLogrosComponent implements OnInit {

  public logros: ILogro[] = [];
  public estudiante_id: number;
  constructor(private logroService: LogroService,
    private route: ActivatedRoute,
    private estudianteService: EstudianteService) {
    this.estudiante_id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.loadLogrosByEstudianteId();
  }

  loadLogrosByEstudianteId() {
    if (this.estudiante_id) {
      this.logroService.getLogroByEstudianteId(this.estudiante_id).subscribe(r => {
        this.logros = r;
      })

      this.estudianteService.getSummaryByEstudianteId(this.estudiante_id).subscribe(r => {
        this.estudianteService.setId(r.id);
        this.estudianteService.setCedula(r.cedula);

      })
    }
  }

  deleteLogro(logro_id: number) {

    Swal.fire({
      title: '¿Estas seguro de eliminar este registro?',
      text: "No podrás reveritr los cambios",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.logroService.deleteLogro(logro_id).subscribe(() => {
          Swal.fire('Registro Eliminado', '', 'info');
          this.loadLogrosByEstudianteId();
        });

      }
    })
  }

}
