import { Component, OnInit } from '@angular/core';
import { EMPRESA_MENU_OPTIONS } from 'src/app/data/constants/ui/empresa-menu-options';
import { IEmpresa } from 'src/app/data/interfaces/models/iempresa';
import { CardOption } from 'src/app/data/interfaces/ui/card-option';
import { AuthService } from '../../auth/services/auth.service';
import { EmpresaService } from '../services/empresa.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  public empresaOptions: CardOption[] = EMPRESA_MENU_OPTIONS;
  public usuario_id = 0;
  public perfilEmpresa: IEmpresa | any;
  public links: { link: string }[] = [
    { link: 'contactosEmpresariales/empresa/' },
    { link: 'ofertasPublicadas/empresa/' },
    { link: 'ofertasAplicadas/empresa/' }
  ]
  constructor(private authService: AuthService,
    private empresaService: EmpresaService) {
  }

  ngOnInit(): void {
    this.usuario_id = this.authService.getUser().usuario_id;
    this.empresaService.getEmpresaByUserId(this.usuario_id).subscribe(r => {
      //perfil Empresa
      this.perfilEmpresa = r;
      localStorage.setItem('idEmpresa', r.id)
      this.empresaService.setId(r.id);
      for (let index = 0; index < this.empresaOptions.length; index++) {
        this.empresaOptions[index].link = this.links[index].link + r.id;

      }
    })
  }

  disableCards() {
    if (!this.perfilEmpresa) {
      return "btn btn-light disabled";
    }
    return '';
  }

}
