import {Component, OnInit} from '@angular/core';
import {ADMIN_MENU_OPTIONS} from "../../../data/constants/ui/admin-menu-options";
import {CardOption} from "../../../data/interfaces/ui/card-option";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  public adminOptions: CardOption[] = ADMIN_MENU_OPTIONS;

  public links: { link: string }[] = [
    {link: 'hojas-vida'},
    {link: 'perfil-empresarial'},
    {link: 'ofertas-laborales'},
    {link: 'postulaciones'},
    {link: 'reportes'},
    {link: 'provincia'},
    {link: 'ciudad'},
    {link: 'area-estudio'},
    {link: 'istitucion-educativa'},
    {link: 'usuario-list'},

  ];


  constructor() {
  }

  ngOnInit(): void {

    for (let index = 0; index < this.adminOptions.length; index++) {
      this.adminOptions[index].link = this.links[index].link;
    }
  }

}
