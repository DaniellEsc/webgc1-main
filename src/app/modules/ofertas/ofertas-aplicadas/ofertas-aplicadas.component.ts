import { Component, OnInit } from '@angular/core';
import { IOferta } from 'src/app/data/interfaces/models/ioferta';
import { IPostulacion } from 'src/app/data/interfaces/models/ipostulacion';
import Swal from 'sweetalert2';
import { EstudianteService } from '../../estudiante/services/estudiante.service';
import { PostulacionService } from '../../postulaciones/services/postulacion.service';
import { OfertaService } from '../oferta.service';

@Component({
  selector: 'app-ofertas-aplicadas',
  templateUrl: './ofertas-aplicadas.component.html',
  styleUrls: ['./ofertas-aplicadas.component.css']
})
export class OfertasAplicadasComponent implements OnInit {

  public estudiante_id: number = 0;
  public postulacion_id: number = 0;
  public misPostulaciones: IPostulacion[] = [];
  public ofertasLaboralesInfo: IOferta[] | any[] = [];

  constructor(private estudianteService: EstudianteService,
    private postulacionService: PostulacionService,
    private ofertaService: OfertaService) {

  }

  ngOnInit(): void {
    this.estudiante_id = this.estudianteService.getId();
    console.log(this.estudiante_id);
    this.loadPostulaciones();

  }
  loadPostulaciones() {
    this.postulacionService.getPostulacionesByEstudianteId(this.estudiante_id).subscribe(r => {
      this.misPostulaciones = r;
      for (const postulacion of r) {
        this.ofertaService.getOfertasById(postulacion.ofertalaboral_id).subscribe(r => {
          this.ofertasLaboralesInfo.push(r);
        });
      }

    });
  }

  estadoPostulacionStyle(estado: string): string {

    switch (estado) {
      case 'En espera':
        return 'text-bg-secondary';
      case 'En revisión':
        return 'text-bg-primary';
      case 'Aprobado':
        return 'text-bg-success';
        case 'No Aprobado':
          return 'text-bg-black';
    }
    return 'text-bg-light';

  }

  deletePostulacion(id: number) {
    Swal.fire({
      title: '¿Deseas anular tu postulación a esta oferta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.postulacionService.deletePostulacion(id).subscribe(() => {
          Swal.fire('Registro Eliminado', '', 'info');
          this.loadPostulaciones();
        });

      }
    })
  }

}
