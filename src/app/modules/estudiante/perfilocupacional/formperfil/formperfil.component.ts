import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/data/classes/alert';
import { Iperfilocupacionales } from 'src/app/data/interfaces/models/iperfilocupacional';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import Swal from 'sweetalert2';
import { EstudianteService } from '../../services/estudiante.service';
import { PerfilocupacionalService } from '../../services/perfilocupacional/perfilocupacional.service';

@Component({
  selector: 'app-formperfil',
  templateUrl: './formperfil.component.html',
  styleUrls: ['./formperfil.component.css']
})
export class FormperfilComponent implements OnInit {

public postperfil: Iperfilocupacionales| any = {};
public estudiante_id: number=0;
public perfil_id: number=0;
public cedula?: string;

  constructor(
    private  perfilService: PerfilocupacionalService,
    private estudianteService: EstudianteService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.perfil_id = this.route.snapshot.params['id'];
    
  }

  ngOnInit(): void {
    this.estudiante_id = this.estudianteService.getId();
    this.postperfil.cedula = this.estudianteService.getCedula(); 
    if (this.perfil_id) {
      this.perfilService.getSummaryByPerfilId(this.perfil_id).subscribe(r => {
        this.postperfil = r;
      })
    }




  }


  registrarPerfil() {
    if (this.perfil_id) {
      // actualizamos
      this.perfilService.edit(this.perfil_id, this.postperfil).subscribe(r => {
        let alert = new Alert(r.error, r.icon, r.message, this.router);
        alert.response('/panel/estudiante/perfilOcupacional/estudiante/' + this.estudiante_id);
      })
    } else {
      this.postperfil.cedula=this.estudianteService.getCedula();
      console.log(this.postperfil);
      this.perfilService.save(this.postperfil).subscribe(        
        r => {
          let alert = new Alert(r.error, r.icon, r.message, this.router);
          alert.response('/panel/estudiante/perfilOcupacional/estudiante/' + this.estudiante_id);
          
        }
      )
    }

  }


  response(state: boolean, icon: any, text: any) {
    Swal.fire({
      icon: icon,
      text: text
    })
    if (!state) {
      this.router.navigateByUrl('/panel/estudiante');
    }
  }


}
